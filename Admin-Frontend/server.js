require('isomorphic-fetch');
const dotenv = require('dotenv');
dotenv.config();
const Koa = require('koa');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');
const { default: graphQLProxy } = require('@shopify/koa-shopify-graphql-proxy');
const { ApiVersion } = require('@shopify/koa-shopify-graphql-proxy');
const Router = require('koa-router');
const { receiveWebhook, registerWebhook } = require('@shopify/koa-shopify-webhooks');
const getSubscriptionUrl = require('./server/getSubscriptionUrl');
const shopSearchInDB = require('./server/shopSearchInDB');
const mongoose = require('mongoose')

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, xPoweredBy: false });
const handle = app.getRequestHandler();
let shopFound = false;
let Shop;

mongoose
  .connect(process.env.DATABASE_LOCAL, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true})
  .then(()=> {
    console.log('DB Connected')
    Shop = require('./models/shop');
  })
  .catch(err=>{
    console.log(err);
  })

mongoose.Promise = require('bluebird');

mongoose.connection.on('error', (err) => {
  console.error(`🚫 Database Error 🚫  → ${err}`);
});  

const {
  SHOPIFY_API_SECRET_KEY,
  SHOPIFY_API_KEY,
  HOST,
} = process.env;


app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();
  server.use(session({ sameSite: 'none', secure: true }, server));
  server.keys = [SHOPIFY_API_SECRET_KEY];

  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: ['read_products', 'write_products'],
      async afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;
	      ctx.set('X_FRAME_OPTIONS', 'ALLOWALL');
        ctx.cookies.set("shopOrigin", shop, {
          httpOnly: false,
          secure: true,
          sameSite: 'none'
        });
        let message = await shopSearchInDB({ctx, accessToken, shopify_domain: shop}).then((response)=>{
          console.log('response to shopSearchInDB', response);
          return response;
        });
        console.log('message in afterAuth function: ', message);

        if(message=='shop successfully created'){
            console.log('ran newshop logic in afterAuth func')
            const registration = await registerWebhook({
                address: `${HOST}/webhooks/products/create`,
                topic: 'PRODUCTS_CREATE',
                accessToken,
                shop,
                apiVersion: ApiVersion.July20
              });

              if (registration.success) {
                console.log('Successfully registered webhook!');
              } else {
                console.log('Failed to register webhook', registration.result);
              }
              await getSubscriptionUrl(ctx, accessToken, shop);
        } else {
            console.log('ran shop exists in db logic');
            console.log('ctx.request.url:',ctx.request.url);
            ctx.redirect(`https://${shop}/admin/apps/${process.env.APP_SLUG}?shop=${shop}`); 
        }
      }
    })
  );

  const webhook = receiveWebhook({ secret: SHOPIFY_API_SECRET_KEY });

  router.post('/webhooks/products/create', webhook, (ctx) => {
    console.log('received webhook: ', ctx.state.webhook);
  });

  server.use(graphQLProxy({ version: ApiVersion.July20 }));

  router.get('*', verifyRequest(), async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
  });

  server.use(router.allowedMethods());
  server.use(router.routes());

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});

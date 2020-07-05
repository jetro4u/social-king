require('isomorphic-fetch');
const dotenv = require('dotenv');
const Koa = require('koa');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');

dotenv.config();
const { default: graphQLProxy } = require('@shopify/koa-shopify-graphql-proxy');
const Router = require('koa-router');
const {receiveWebhook, registerWebhook} = require('@shopify/koa-shopify-webhooks');

const { ApiVersion } = require('@shopify/koa-shopify-graphql-proxy');
const getSubscriptionUrl = require('./server/getSubscriptionUrl');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const mongoose = require('mongoose');
const Shop = require('./models/Shop');

mongoose
  .connect(process.env.DATABASE_LOCAL, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true})
  .then(()=> {
    console.log('DB Connected')

  })
  .catch(err=>{
    console.log(err);
  })

const { 
    SHOPIFY_API_SECRET_KEY, 
    SHOPIFY_API_KEY,  
    HOST 
      } = process.env;

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  server.use(session({ secure: true, sameSite: 'none' }, server));
  server.keys = [SHOPIFY_API_SECRET_KEY];

  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: ['read_products', 'write_products', 'read_content', 'write_content'],
      async afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;

        console.log('shop: ', shop)
        console.log('accessToken: ', accessToken)
        ctx.cookies.set('shopOrigin', shop, {
          httpOnly: false,
          secure: true,
          sameSite: 'none'
        });

        let new_shop = new Shop({ shopify_domain: shop, shopifyToken: accessToken, shopifyScope: 'read_products, write_products, read_content, write_content' })
          new_shop.save((err, shopReturned) => {
              if (err) {
                  // return res.status(401).json({
                  //     error: errorHandler(err)
                  // });
                  console.log('error: ', err)
                  const registration = registerWebhook({
                     address: `${HOST}/webhooks/products/create`,
                     topic: 'PRODUCTS_CREATE',
                     accessToken,
                     shop,
                     apiVersion: ApiVersion.October19
                   });

                   if (registration.success) {
                     console.log('Successfully registered webhook!');
                   } else {
                     console.log('Failed to register webhook', registration.result);
                   }

                   getSubscriptionUrl(ctx, accessToken, shop);    
                
              } else {
                  console.log('shop created and returned: ', shopReturned);
              }
        });
      },
    }),
  );

   const webhook = receiveWebhook({secret: SHOPIFY_API_SECRET_KEY});

   router.post('/webhooks/products/create', webhook, (ctx) => {
     console.log('received webhook: ', ctx.state.webhook);
   });

  server.use(graphQLProxy({version: ApiVersion.October19}))
  
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
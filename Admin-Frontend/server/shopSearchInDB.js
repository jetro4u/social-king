const Shop = require('../models/shop');
let message = '';
let shopDomain = '';

function shopSearch({accessToken, shopify_domain}) {
  return new Promise(resolve => {
      Shop.findOne({ shopify_domain }).exec((err, shop) => {
          if (err){
              message = 'ran error logic';
              console.log('ran error logic. err:', err);
              resolve(message);          
          } else if (!shop){
              message = 'ran no shop found logic';
              console.log('message: ', message);        
              shopifyScope = 'read_products, write_products, read_content, write_content'; 
              let new_shop = new Shop({ shopify_domain, accessToken, shopifyScope})
              new_shop.save((err, shopCreated) => {
                if (err) {
                  console.log('err trying to save shop: ', err)
                } else {
                  console.log('shop successfully created: ',shopCreated);
                  message = 'shop successfully created'
                  resolve(message);
                }});
          } else {
              message = 'shop found'
              console.log('shop found: ', shop);
              resolve(message);
          }
      });
  });
}

const shopSearchInDB = async ({ctx, accessToken, shopify_domain}) => {

    console.log('shopify_domain in shopSearchInDB func', shopify_domain);

    const response = await shopSearch({accessToken, shopify_domain});
    console.log('message at end of shopSearchInDB', message)
    console.log('response at end of shopSearchInDB', response)
    return response;
};

module.exports = shopSearchInDB;
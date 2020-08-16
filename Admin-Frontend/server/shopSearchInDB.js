const Shop = require('../models/shop');
const User = require('../models/user');
const Tag = require('../models/tag');
const Blog = require('../models/blog');

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
              shopifyScope = 'read_products, read_content, write_content'; 
              let new_shop = new Shop({ shopify_domain, accessToken, shopifyScope})
              new_shop.save((err, shopCreated) => {
                if (err) {
                  console.log('err trying to save shop: ', err)
                } else {
                  console.log('shop successfully created: ',shopCreated);
                  message = 'shop successfully created';

                  let new_tag = new Tag({ name: 'Getting Started', slug: 'getting-started', shop: shopify_domain });
                  new_tag.save((err, tagCreated) => {
                    if (err) {
                      console.log('err trying to save tag: ', err)
                    } else {

                        const new_user = new User({ name: 'Samantha Jones', email: 'alephmarketingpros@gmail.com', password: '123', profile: `https://${shopify_domain}/community/connect/user/samantha-jones`, username: 'samantha-jones', shopDomain: shopify_domain });
                        new_user.save((err, userCreated) => {
                            if (err) {
                                console.log('err trying to save user: ', err)
                                // return {error: err};
                            } else {

                              let blogBody = [
                                {
                                  "time" : 1597223330362,
                                  "blocks" : [
                                    {
                                      "type" : "list",
                                      "data" : {
                                        "style" : "ordered",
                                        "items" : [
                                          "Upvoting and downvoting posts",
                                          "Integration with loyalty program apps like Smile.io so that you can award customers points for participation",
                                          "Integration with Drip and Klaviyo email marketing app"
                                        ]
                                      }
                                    },
                                    {
                                      "type" : "image",
                                      "data" : {
                                        "file" : {
                                          "url" : "https://socialking.app/proxy/images/uploads/Cynthia-Lopez-1597223298070.jpg"
                                        },
                                        "caption" : "",
                                        "withBorder" : false,
                                        "stretched" : false,
                                        "withBackground" : false
                                      }
                                    }
                                  ],
                                  "version" : "2.18.0"
                                }
                              ];

                              const new_blog = new Blog({ hidden: false, shopifyDomain: shopify_domain, title: "How To Start Getting Posts", body: blogBody })
                              new_blog.save((err, blogCreated) => {
                                if (err) {
                                    console.log('err trying to save blog post: ', err)
                                } else {
                                  resolve(message);
                                }})
                            }})
                    }
                  })
                }});
          } else {
              message = 'shop found'
              console.log('shop found: ', shop);
              console.log('current accessToken', shop.accessToken);

              shop.accessToken = accessToken;

              shop.save((err, shopUpdated) => {
                if (err) {
                  console.log('err trying to save shop: ', err)
                } else {
                  console.log('shop successfully updated: ',shopUpdated);
                  console.log('This should be the updated accessToken: ',accessToken);

                  resolve(message);
              }});
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
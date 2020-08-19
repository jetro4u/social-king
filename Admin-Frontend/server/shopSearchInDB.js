const Shop = require('../models/shop');
const User = require('../models/user');
const Tag = require('../models/tag');
const Blog = require('../models/blog');

var NumberInt = require('mongoose-int32');
const {blogBody} = require('./sample_content/blogBody.js');


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
              console.log('blogBody', blogBody);
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
                        let cover_photo = 'https://socialking.app/proxy/images/uploads/Support-@AmpItUp-1597570376898.jpg';
                        const new_user = new User({ cover_photo, name: 'Samantha Jones', email: 'alephmarketingpros@gmail.com', password: '123', profile: `https://${shopify_domain}/community/connect/user/samantha-jones`, username: 'samantha-jones', shopDomain: shopify_domain });
                        new_user.save((err, userCreated) => {
                            if (err) {
                                console.log('err trying to save user: ', err)
                                // return {error: err};
                            } else {

                              let slug = "5-steps-to-building-a-shopper-community";
                              let coverMedia = "https://socialking.app/api/images/uploads/social-king-app.myshopify.com-1597571628547.jpg";
                              let mtitle= "5 Steps To Building a Shopper Community | Social King";
                              let excerpt = "Heyooo. We get it, Building a Shopper Community can be challenging, but we want to help you get there. That's why we've created 5 Steps to Kickstarting Your Own Social Network.";
                              let mdesc= "Heyooo. We get it, Building a Shopper Community can be challenging, but we want to help you get there. That's why we've created 5 Steps to Kickstarting Your Own";
                              let postedBy = userCreated._id;
                              const new_blog = new Blog({ postedBy, mtitle, excerpt, mdesc, coverMedia, slug, hidden: false, archivedByUser: false, shopifyDomain: shopify_domain, title: "5 Steps to Kickstarting Your Shopper Network", body: blogBody })
                              new_blog.save((err, blogCreated) => {
                                if (err) {
                                    console.log('err trying to save blog post: ', err)
                                } else {
                                  let tags = [tagCreated._id];

                                   Blog.findByIdAndUpdate(blogCreated._id, { $set: { shopPostedAt: [shopCreated._id] } }, { new: true }).exec(
                                    (err, result) => {
                                        if (err) {
                                            console.log('ran error in block when trying to save blog reference to shop', err)
                                        }

                                        tags.forEach((tag, index)=>{
                                            Blog.findByIdAndUpdate(blogCreated._id, { $push: { tags: tag } }, { new: true }).exec(
                                                (err, result) => {
                                                    if (err) {
                                                        console.log('error saving tag reference within blog record', err)
                                                    } else {
                                                        console.log('saved tag reference within blog record:', tag) 
                                                    }
                                                }
                                            );
                                        })
                                    })

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
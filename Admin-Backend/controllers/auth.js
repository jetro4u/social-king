const fetch = require('isomorphic-fetch');

const User = require('../models/user');
const Blog = require('../models/blog');
const Shop = require('../models/shop');

const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const { errorHandler } = require('../helpers/dbErrorHandler');
const _ = require('lodash');
const { OAuth2Client } = require('google-auth-library');
// sendgrid
const sgMail = require('@sendgrid/mail'); // SENDGRID_API_KEY
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const crypto = require('crypto');
const queryString = require('query-string');


exports.adminMiddleware = (req, res, next) => {
   let message = '';
    let shopName = req.query.shop ? req.query.shop.toLowerCase() : '';

      Shop.findOne({ shopify_domain: shopName }).exec((err, shop) => {
          if (err){
              message = 'ran error logic';
              console.log('ran error logic. err:', err);          
          } else if (!shop){
              message = 'ran no shop found logic';
              console.log('message: ', message);
              
              shopifyScope = 'read_products, write_products, read_content, write_content'; 
              let new_shop = new Shop({ shopify_domain: shopName })
              new_shop.save((err, shopReturned) => {
                if (err) {
                  console.log('err trying to save shop: ', err)
                } else {
                  console.log('shop successfully created');
                  req.shop = shop;
                  next();
                }});
          } else {
              message = 'shop found';
              req.shop = shop;
              console.log('shop found: ', shop);
              next();   
          }
      });  
};

exports.showPaymentPage = (req, res)=>{
  console.log('req.body in showPaymentPage controller', req.body);
} 

exports.recordCharge = (req, res) => {
  console.log('req.query in recordCharge controller', req.query);
  let {shopifyDomain, charge_id} = req.query;

  Shop.findOne({ shopify_domain: shopifyDomain }).exec(async (err, shop) => {
    if (err){
        message = 'ran error logic';
        console.log('ran error logic. err:', err);          
    } else {
      const response = await fetch(`https://${shop.shopify_domain}/admin/api/2020-04/recurring_application_charges/{recurring_application_charge_id}.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "X-Shopify-Access-Token": shop.accessToken,
        }
      })

      const responseJson = await response.json();
      console.log('response to charge-data',responseJson);
    }
  })

  
  // const confirmationUrl = responseJson.data.appSubscriptionCreate.confirmationUrl
  // return ctx.redirect(confirmationUrl)

  Shop.findOneAndUpdate({shopify_domain: req.query.shopifyDomain}, { charge_id }, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
} 

exports.isValidShopifyRequest = (req, res, next) => {
  // console.log('req in isValidShopifyRequest', req);  
  // console.log('req.body in isValidShopifyRequest', req.body);
  let query = { ...req.query };

  const hmac = req.query.hmac;
  delete query.hmac;
  query = queryString.stringify(query);

  const check = crypto
    .createHmac('sha256', process.env.SHOPIFY_API_SECRET)
    .update(query)
    .digest('hex');

  const result = (hmac === check);

  if (!result) {
    console.log('invalid hmac', { query, check, hmac });
  }
  console.log('result of isValidShopifyRequest', result);
  next();
  // return result;
}


// automatically attaches the user field to the request object 
// and passes req.user unto the next function in the chain
exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET // req.user
});

exports.canUpdateDeleteBlog = (req, res, next) => {
    const slug = req.params.slug.toLowerCase();
    Blog.findOne({ slug }).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        let authorizedUser = data.postedBy._id.toString() === req.profile._id.toString();
        if (!authorizedUser) {
            return res.status(400).json({
                error: 'You are not authorized'
            });
        }
        next();
    });
};


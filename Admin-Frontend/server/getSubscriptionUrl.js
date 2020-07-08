const Shop = require('../models/shop');

const getSubscriptionUrl = async (ctx, accessToken, shop) => {
  await Shop.findOne({ shop }).exec((err, shopReturned) => {
      if (err){
          message = 'ran error logic';
          console.log('ran error logic. err:', err);          
      } else if (!shopReturned){
          message = 'ran no shop found logic';
          console.log('message: ', message);
      } else {
          message = 'shop found';
          console.log('shop found: ', shopReturned)
          return ctx.redirect(`https://${shopReturned.shopify_domain}/admin/apps/community-2/manage/manage-posts`); 
      }
  });

  const query = JSON.stringify({
    query: `mutation {
      appSubscriptionCreate(
          name: "Super Duper Plan"
          returnUrl: "${process.env.HOST}"
          test: true
          lineItems: [
          {
            plan: {
              appUsagePricingDetails: {
                  cappedAmount: { amount: 10, currencyCode: USD }
                  terms: "$1 for 1000 emails"
              }
            }
          }
          {
            plan: {
              appRecurringPricingDetails: {
                  price: { amount: 10, currencyCode: USD }
              }
            }
          }
          ]
        ) {
            userErrors {
              field
              message
            }
            confirmationUrl
            appSubscription {
              id
            }
        }
    }`
  });

  const response = await fetch(`https://${shop}/admin/api/2019-10/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "X-Shopify-Access-Token": accessToken,
    },
    body: query
  })

  const responseJson = await response.json();
  const confirmationUrl = responseJson.data.appSubscriptionCreate.confirmationUrl
  return ctx.redirect(confirmationUrl)
};

module.exports = getSubscriptionUrl;
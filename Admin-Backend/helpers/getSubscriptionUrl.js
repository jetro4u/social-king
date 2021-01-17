const fetch = require('isomorphic-fetch');

exports.getSubscriptionUrl = async (req, res) => {
   console.log('ran getSubscriptionUrl func');

   let {shop} = req.query;
   let {accessToken} = req.shop;

   console.log('shop in getSubscriptionUrl', shop)
   console.log('accessToken in getSubscriptionUrl', accessToken)
   console.log('req.shop in getSubscriptionUrl', req.shop);

   const APP_SLUG = process.env.NODE_ENV == 'development' ? 'community-2' : 'social-king';

  const query = JSON.stringify({
    query: `mutation {
      appSubscriptionCreate(
          name: "All The Features",
          trialDays: 30,
          returnUrl: "https://${shop}/admin/apps/${APP_SLUG}"
          test: ${process.env.NODE_ENV == 'development' ? 'true' : 'false'}
          lineItems: [
          {
            plan: {
              appRecurringPricingDetails: {
                  price: { amount: 0.99, currencyCode: USD }
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

  const response = await fetch(`https://${shop}/admin/api/2019-07/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "X-Shopify-Access-Token": accessToken,
    },
    body: query
  })

  const responseJson = await response.json();
  console.log('responseJson.data', responseJson.data)

  let confirmationUrl = responseJson.data.appSubscriptionCreate.confirmationUrl;

  // confirmationUrl = confirmationUrl.split(shop)[1];
  res.setHeader("X-Frame-Options","ALLOWALL");
  res.send({redirect: true, confirmationUrl})
};


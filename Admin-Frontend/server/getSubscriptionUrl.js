const getSubscriptionUrl = async ({ctx, accessToken, shop, devStore}) => {
  const query = JSON.stringify({
    query: `mutation {
      appSubscriptionCreate(
          name: "All The Features",
          trialDays: 15,
          returnUrl: "${process.env.HOST}"
          test: ${process.env.NODE_ENV == 'development' || devStore ? 'true' : 'false'}
          lineItems: [
          {
            plan: {
              appRecurringPricingDetails: {
		      price: { amount: 4.99, currencyCode: USD }
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
  
  console.log('query in getSubsriptionURL', query);
  console.log('responseJson in getSubsriptionURL', responseJson);
  const confirmationUrl = responseJson.data ? responseJson.data.appSubscriptionCreate.confirmationUrl : `https://${shop}/admin/apps/${process.env.APP_SLUG}?shop=${shop}`;
  return ctx.redirect(confirmationUrl)
};

module.exports = getSubscriptionUrl;

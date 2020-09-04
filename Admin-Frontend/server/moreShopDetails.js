const moreShopDetails = async ({ctx, accessToken, shopify_domain}) => {
  const query = JSON.stringify({
    query: `{
      shop {
        name
        description
        id
        contactEmail
        email
        features {
          storefront
        }
        plan {
          displayName
          shopifyPlus
          partnerDevelopment
        }
        customerAccounts
      }
    }`
  });

  const response = await fetch(`https://${shopify_domain}/admin/api/2019-07/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "X-Shopify-Access-Token": accessToken,
    },
    body: query
  })

  const responseJson = await response.json();
  return responseJson.data.shop;
};

module.exports = moreShopDetails;



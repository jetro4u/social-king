Shop.findOne({ shopify_domain: shop }).exec((err, shop) => {
            if (err){
                console.log('ran error logic. err:', err);          
            } else if (!shop){
                console.log('ran no shop found logic');
                
                shopifyScope = 'read_products, write_products, read_content, write_content'; 
                let new_shop = new Shop({ shopify_domain: shop, accessToken, shopifyScope})
                new_shop.save((err, shopReturned) => {
                  if (err) {
                    console.log('err trying to save shop: ', err)
                  } else {
                    console.log('shop successfully created');
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
                  }});
            } else {
                console.log('shop found: ', shop)   
            }
        });





Shop.findOne({ shopify_domain: shop }).exec((err, shop) => {
            if (err){
                console.log('ran error logic. err:', err);          
            } else if (!shop){
                console.log('ran no shop found logic');
                
                shopifyScope = 'read_products, write_products, read_content, write_content'; 
                let new_shop = new Shop({ shopify_domain: shop, accessToken, shopifyScope})
                new_shop.save((err, shopReturned) => {
                  if (err) {
                    console.log('err trying to save shop: ', err)
                  } else {
                    console.log('shop successfully created');
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
                  }});
            } else {
                console.log('shop found: ', shop)   
            }
        });
This was the log the first time that 'CIF' tried logging into the 'Community Builder app'.

(these lines were from console messages from the frontend - note that 
	within the frontend we are also logging these console messages in the DOM
	Chrome Dev Tools seems to show values for shopOrigin as well)
(Hence, if possible, you should use this 'shopOrigin' object when making API calls the NodeJS Backend server).
(ie, pass the shopOrigin url into all the nested components - like ManagePosts and BlogUpdate components, and then,
	relay the shopOrigin url into the actions function and POST request so you get shop-specific data each request).

config object in _app.js { apiKey: '96adee0cb18d73c42c92313a70b8b58a',
  shopOrigin: undefined,
  forceRedirect: true }

(these lines were from console messages in server.js)
shop:  jungle-navigator.myshopify.com
accessToken:  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
Successfully registered webhook!

  TypeError: Cannot read property 'appSubscriptionCreate' of undefined
      at getSubscriptionUrl (C:\Users\Elisha\Desktop\Shopify\shopify-community-app\frontend\server\getSubscriptionUrl.js:48:45)
      at <anonymous>
      at process._tickCallback (internal/process/next_tick.js:188:7)

https://shopify.dev/tutorials/build-a-shopify-app-with-node-and-react/fetch-data-with-apollo


Setting up on your local machine:

Install ngrok globally
```
npm install ngrok -g
```
Set ngrok to use port 3000:
```
ngrok http 3000
```

Add the .env file to the root folder with app's api key and secret

The terminal will log the https:// address that exposes the app running on your localhost:3000 

Copy that ngrok https address into the .env file.


Within the <a href"https://partners.shopify.com">Partners Dashboard</a>, go into the app that you want to test.

This is the page on the Partners Dashboard that allows you to <a href="https://partners.shopify.com/780470/apps/3766401/edit">add new App URL's</a> to the Community Builder App.

Paste the same HTTPS forwarding URL into the Whitelisted redirection URL(s) field and add /auth/callback to the end of the path.

It will look like this:

<img src="documentation/ngrok_urls.JPG"/>


That app from the Partners Dashboard is connected with a Test Dev Store, <a href="https://jungle-navigator.myshopify.com/admin/apps">Jungle Navigator</a>

Within the Test Dev Store you can view the app running on Heroku or your local machine.


Finally run:
```
npm run dev
```




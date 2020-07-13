require("dotenv").config();
const withCSS = require('@zeit/next-css');
const webpack = require('webpack');

const apiKey =  JSON.stringify(process.env.SHOPIFY_API_KEY);

module.exports = withCSS({
  publicRuntimeConfig: {
    APP_NAME: 'Shopify Tribe',
    API_DEVELOPMENT: 'http://localhost:8000/api',
    API_PRODUCTION: 'https://amazonfashion.app/api',
    PRODUCTION: true,
    DOMAIN_DEVELOPMENT: 'http://localhost:3000',
    DOMAIN_PRODUCTION: 'https://amazonfashion.app',
    FB_APP_ID: '305241670454834',
    DISQUS_SHORTNAME: 'ampitup-io',
    GOOGLE_CLIENT_ID:'299145764723-o5k1tr51r339gua3cja4o02r0l2g4lkb.apps.googleusercontent.com'
  },
  webpack: (config) => {
    const env = { API_KEY: apiKey };
    config.plugins.push(new webpack.DefinePlugin(env));
    return config;
  },
});

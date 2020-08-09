import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import { Provider } from '@shopify/app-bridge-react';
import Cookies from "js-cookie";
import '@shopify/polaris/styles.css';
import translations from '@shopify/polaris/locales/en.json';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'

import { createHttpLink } from 'apollo-link-http';
import { setContext } from "apollo-link-context";
import { InMemoryCache } from 'apollo-cache-inmemory';

import queryString from 'query-string';
import { checkSubscription } from '../actions/auth';

const authLink = setContext((_, { headers }) => {
    return {
            headers: {
                  ...headers,
                  authorization: Cookies.get('accessToken') ? `Bearer ${Cookies.get('accessToken')}` : "",
              }
        }
})

const httpLink = new createHttpLink({
      credentials: 'same-origin',
      headers: {
              accept: '*/*', 
              'Content-Type': 'application/graphql',
              'Access-Control-Allow-Origin': '*',
              "X-Shopify-Access-Token": Cookies.get('accessToken')
            },
      fetch,
      ssrMode: !process.browser,
      uri: `https://${Cookies.get('shopOrigin')}/admin/api/2019-04/graphql.json`,
})

const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
});



class MyApp extends App {
  componentDidMount () {
    const {router} = this.props;
    let { shop } = queryString.parse(router.asPath);
    let {charge_id} = router.query;
    console.log('router', router)
    
    checkSubscription(charge_id, shop, router.asPath);
  }

  render() {
    const { Component, pageProps, router } = this.props;

    let { shop } = queryString.parse(router.asPath);
    console.log('shop', shop);
    let shopOrigin = Cookies.get("shopOrigin") ? Cookies.get("shopOrigin") : shop;

    const config = { apiKey: API_KEY, shopOrigin, forceRedirect: true };

    return (
      <React.Fragment>
        <Head>
          <title>Social King</title>
          <meta charSet="utf-8" />
        </Head>
        <Provider config={config}>
          <AppProvider>
            <ApolloProvider client={client}>
              <Component {...pageProps} app={config} />
          </ApolloProvider>
          </AppProvider>
        </Provider>
      </React.Fragment>
    );
  }
}

export default MyApp;
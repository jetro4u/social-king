import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import { Provider } from '@shopify/app-bridge-react';
import '@shopify/polaris/styles.css';
import translations from '@shopify/polaris/locales/en.json';
import Cookies from 'js-cookie';
import { ApolloProvider } from 'react-apollo';

import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, concat } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import 'cross-fetch/polyfill';

// Create ApolloClient Instance and point to your Shopify store's GraphQl server.
const httpLink = new HttpLink({ uri: `https://${Cookies.get("shopOrigin")}.myshopify.com/api/graphql` });

// Add authentication headers
const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
    operation.setContext({
      headers: {
        'X-Shopify-Storefront-Access-Token': `${Cookies.get("accessToken")}`
      } 
    });

    return forward(operation);
  })

  const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache(),
});


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    console.log('API_KEY: ',API_KEY)
    const config = { apiKey: API_KEY, shopOrigin: Cookies.get("shopOrigin"), forceRedirect: true };

    return (
      <React.Fragment>
        <Head>
          <title>Sample App</title>
          <meta charSet="utf-8" />
        </Head>
        <Provider config={config}>
          <AppProvider>
            <ApolloProvider client={client}>
              <Component {...pageProps} />
          </ApolloProvider>
          </AppProvider>
        </Provider>
      </React.Fragment>
    );
  }
}

export default MyApp;

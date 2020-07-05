import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import { Provider } from '@shopify/app-bridge-react';
import '@shopify/polaris/styles.css';
import translations from '@shopify/polaris/locales/en.json';
import Cookies from 'js-cookie';
import { ApolloProvider } from 'react-apollo';

import fetch from 'node-fetch'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import ApolloClient from 'apollo-client'

const client = new ApolloClient({
  fetchOptions: {
    credentials: 'include',
  },
  link: createHttpLink({
    uri: '/admin/api/2020-04/graphql.json',
  fetch: fetch,
  }),
  cache: new InMemoryCache(),
})


-----------------------
May 12th version:

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
const httpLink = new HttpLink({ uri: `https://${Cookies.get("shopOrigin")}.myshopify.com/admin/api/2020-04/graphql` });
// const httpLink = new HttpLink({ uri: `https://shopify-graphiql-app.shopifycloud.com/admin/api/2020-04/graphql` });
// const httpLink = new HttpLink({ uri: `http://shopify-community-app.herokuapp.com/graphql` });



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

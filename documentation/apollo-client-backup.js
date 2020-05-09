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
	// fetchOptions: {
 //    credentials: 'include',
 //  },
  link: createHttpLink({
    uri: '/admin/api/2020-04/graphql.json',
  fetch: fetch,
  }),
  cache: new InMemoryCache(),
})

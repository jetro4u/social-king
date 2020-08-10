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

import { EmptyState, Layout, Page } from '@shopify/polaris';
import { Button } from '@shopify/polaris';
const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

import createApp from '@shopify/app-bridge';  
import { Redirect } from '@shopify/app-bridge/actions';

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
  constructor(props) {
    super(props);
    this.state = {confirmationUrl: false};
  }

  componentDidMount () {
    const {router} = this.props;
    let { shop } = queryString.parse(router.asPath);
    let {charge_id} = router.query;
    console.log('router', router);
    let urlParams = router.asPath.split('?')[1]

    if(!router.asPath.includes('admin/charges')){
        checkSubscription(charge_id, shop, urlParams).then((response)=>{
            console.log('response in _app.js from checkSubscription action', response)
            if(response && response.redirect == true){
                 console.log('supposed to redirect in checkSubscription func to', response.confirmationUrl);
                 this.setState({confirmationUrl: response.confirmationUrl})
            }
        }); 
    }
  }

  render() {
    const { Component, pageProps, router } = this.props;
    const {confirmationUrl} = this.state;

    let { shop } = queryString.parse(router.asPath ? router.asPath.split('?')[1] : '');
    console.log('shop', shop);
    let shopOrigin = Cookies.get("shopOrigin") ? Cookies.get("shopOrigin") : shop;

    const config = { apiKey: API_KEY, shopOrigin, forceRedirect: true };
    const app = createApp(config);  
    const redirect = Redirect.create(app);
   
    if(confirmationUrl){
        redirect.dispatch(Redirect.Action.REMOTE, confirmationUrl);
    } else {
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
}

export default MyApp;
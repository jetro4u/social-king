import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';
import { API } from '../config';
import Router from 'next/router';

import { tryParse } from '../utils/error'

export const verifiedShop = () => {
    let onLoginEndpoint;

    if (isAuth() && isAuth().role === 1) {
        createBlogEndpoint = `${API}/blog`;
    } else if (isAuth() && isAuth().role === 0) {
        createBlogEndpoint = `${API}/user/blog`;
    }

    return fetch(`${onLoginEndpoint}`, {
        method: 'GET'
    })
        .then(response => {
            handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};

export const handleResponse = response => {
    if (response.status === 401) {
        Router.push({
            pathname: '/signin',
            query: {
                message: 'Your session is expired. Please signin'
            }
        });
    } else if (response.redirect == true){
         console.log('supposed to redirect in handleResponse func to', response.confirmationUrl);
         Router.push({
            pathname: response.confirmationUrl,
            query: {
                message: 'Your session is expired. Please signin'
            }
        });
    }
};

// Check for a verified charge
export const checkSubscription = (charge_id, shopifyDomain, asPath) => {
    console.log('asPath in checkSubscription func', asPath);

    let token = '';
    let checkSubscriptionEndpoint = `${API}/auth/check-subscription?${asPath}`;

    return fetch(`${checkSubscriptionEndpoint}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: {}
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));

};

// set cookie
export const setCookie = (key, value) => {
    if (process.browser) {
        cookie.set(key, value, {
            expires: 1
        });
    }
};

export const removeCookie = key => {
    if (process.browser) {
        cookie.remove(key, {
            expires: 1
        });
    }
};
// get cookie
export const getCookie = key => {
    if (process.browser) {
        return cookie.get(key);
    }
};
// localstorage
export const setLocalStorage = (key, value) => {
    if (process.browser) {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

export const removeLocalStorage = key => {
    if (process.browser) {
        localStorage.removeItem(key);
    }
};
// autheticate user by pass data to cookie and localstorage
export const authenticate = (data, next) => {
    setCookie('token', data.token);
    setLocalStorage('user', data.user);
    next();
};

export const isAuth = () => {
    if (process.browser) {
       return cookie.get('user');
    }
}

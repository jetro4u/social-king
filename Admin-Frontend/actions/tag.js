import fetch from 'isomorphic-fetch';
import { API } from '../config';
import { handleResponse } from './auth';

export const create = (tag, props, token) => {
    return fetch(`${API}/tag`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({tag, props})
    })
        .then(response => {
            handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateTag = ({newTagName, props, token}) => {
    let updateTagEndpoint;
   
    console.log('newTagName in updateTag func', newTagName);
    console.log('props in updateTag func', props);

    updateTagEndpoint = `${API}/tag/${props.slug}`;
    let data = JSON.stringify({newTagName, props, token});

    return fetch(`${updateTagEndpoint}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: data
    })
        .then(response => {
            handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getTags = (props) => {
    console.log('props in getTags function', props);
    let username = props.app ? props.app.shopOrigin : '';

    return fetch(`${API}/tags?shop=${username}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const singleTag = (slug, skip, limit) => {
    const data = {
        slug,
        skip,
        limit
    };

    return fetch(`${API}/blogs-of-given-tag`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const removeTag = (slug, token) => {
    return fetch(`${API}/tag/${slug}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};

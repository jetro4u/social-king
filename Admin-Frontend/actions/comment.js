import fetch from 'isomorphic-fetch';
import { API } from '../config';
import queryString from 'query-string';
import { isAuth, handleResponse } from './auth';

export const list = (props) => {

    let listCommentsEndpoint;
    console.log('props in comment list function', props);
    let username = props ? props.app.shopOrigin : '';

    listCommentsEndpoint = `${API}/${username}/comments`;

    return fetch(`${listCommentsEndpoint}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const removeComment = (id, token) => {
    let deleteCommentEndpoint;

    deleteCommentEndpoint = `${API}/comment/${id}`;

    return fetch(`${deleteCommentEndpoint}`, {
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

export const toggleCommentVisibility = (id, token) => {
    let toggleCommentEndpoint;

    toggleCommentEndpoint = `${API}/comment/toggle/${id}`;

    return fetch(`${toggleCommentEndpoint}`, {
        method: 'PUT',
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


export const API_TOKEN = 'apiToken';
export const USER = 'user';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
import {  push } from 'react-router-redux'

function loginRequest(user) {
  return {
    type: LOGIN_REQUEST,
    user,
  };
}

function loginSuccess(payload, redirect) {
  return dispatch => {
    dispatch(setUserData(payload));

    console.log(redirect);
    dispatch(push(redirect||'dashboard'));
  }
}

function setUserData(payload){
  const apiToken = payload[API_TOKEN];
  const user = payload[USER];


  return {
    type: LOGIN_SUCCESS,
    user: user,
    apiToken: apiToken,
  };

}

function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}


export function login(user, password, redirect) {

  const config = {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
      password,
    }),
    redirect: redirect,
  };
  return callApi('/api/login', config, loginRequest(user), loginSuccess, loginFailure);
}


function decodeUserProfile(idToken) {
  try {
    return jwt_decode(idToken);
  } catch (err) {
    return null;
  }
}

function callApi(url, config, onRequest, onRequestSuccess, onRequestFailure) {
  return dispatch => {
    dispatch(onRequest);

    return fetch(url, config)
    .then(checkStatus)
    .then(parseJSON)
    .then((json) => {
      dispatch(onRequestSuccess(json, config.redirect));
    }).catch((error) => {
      const response = error.response;
      if (response === undefined) {
        dispatch(onRequestFailure(error));
      } else {
        parseJSON(response)
        .then((json) => {
          error.status = response.status;
          error.statusText = response.statusText;
          error.message = json.message;
          dispatch(onRequestFailure(error));
        }
      );
    }
  });
};
}

export function checkStatus(response) {
  if (!response.ok) {   // (response.status < 200 || response.status > 300)
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
  return response;
}

export function parseJSON(response) {
  return response.json();
}

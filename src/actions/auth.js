import {  push } from 'react-router-redux'
import {  callApi } from '../utils/api';
import app_config from '../config';

export const API_TOKEN = 'apiToken';
export const USER = 'user';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

function loginRequest(user) {
  return {
    type: LOGIN_REQUEST,
    user,
  };
}

function loginSuccess(payload, config) {
  return dispatch => {
    dispatch(setUserData(payload));
    dispatch(push(config.redirect||app_config.app.route_index));
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

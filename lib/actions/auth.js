'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOGOUT = exports.LOGIN_FAILURE = exports.LOGIN_SUCCESS = exports.LOGIN_REQUEST = exports.USER = exports.API_TOKEN = undefined;
exports.logout = logout;
exports.login = login;
exports.checkStatus = checkStatus;
exports.parseJSON = parseJSON;

var _reactRouterRedux = require('react-router-redux');

var API_TOKEN = exports.API_TOKEN = 'apiToken';
var USER = exports.USER = 'user';
var LOGIN_REQUEST = exports.LOGIN_REQUEST = 'LOGIN_REQUEST';
var LOGIN_SUCCESS = exports.LOGIN_SUCCESS = 'LOGIN_SUCCESS';
var LOGIN_FAILURE = exports.LOGIN_FAILURE = 'LOGIN_FAILURE';
var LOGOUT = exports.LOGOUT = 'LOGOUT';


function loginRequest(user) {
  return {
    type: LOGIN_REQUEST,
    user: user
  };
}

function loginSuccess(payload, redirect) {
  return function (dispatch) {
    dispatch(setUserData(payload));

    console.log(redirect);
    dispatch((0, _reactRouterRedux.push)(redirect || 'dashboard'));
  };
}

function setUserData(payload) {
  var apiToken = payload[API_TOKEN];
  var user = payload[USER];

  return {
    type: LOGIN_SUCCESS,
    user: user,
    apiToken: apiToken
  };
}

function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error: error
  };
}

function logout() {
  return {
    type: LOGOUT
  };
}

function login(user, password, redirect) {

  var config = {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: user,
      password: password
    }),
    redirect: redirect
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
  return function (dispatch) {
    dispatch(onRequest);

    return fetch(url, config).then(checkStatus).then(parseJSON).then(function (json) {
      dispatch(onRequestSuccess(json, config.redirect));
    }).catch(function (error) {
      var response = error.response;
      if (response === undefined) {
        dispatch(onRequestFailure(error));
      } else {
        parseJSON(response).then(function (json) {
          error.status = response.status;
          error.statusText = response.statusText;
          error.message = json.message;
          dispatch(onRequestFailure(error));
        });
      }
    });
  };
}

function checkStatus(response) {
  if (!response.ok) {
    // (response.status < 200 || response.status > 300)
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
  return response;
}

function parseJSON(response) {
  return response.json();
}
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = auth;

var _auth = require('../actions/auth');

var initialState = {
  user: undefined,
  apiToken: undefined,
  loggingIn: false,
  loginError: null
};

function auth() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _auth.LOGIN_REQUEST:
      return Object.assign({}, state, { loggingIn: true });
    case _auth.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loggingIn: false, user: action.user, apiToken: action.apiToken });
    case _auth.LOGIN_FAILURE:
      return _extends({}, state, {
        loggingIn: false,
        user: null,
        loginError: action.error });
    case _auth.LOGOUT:
      return _extends({}, state, { user: undefined, apiToken: undefined });
    default:
      return state;
  }
}
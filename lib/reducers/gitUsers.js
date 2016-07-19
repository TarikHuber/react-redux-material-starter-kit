'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectedUsersPage = selectedUsersPage;
exports.usersQuery = usersQuery;
exports.usersByPage = usersByPage;

var _gitUsers = require('../actions/gitUsers');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function selectedUsersPage() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _gitUsers.SELECT_USERS_PAGE:
      return action.page;
    default:
      return state;
  }
}

function usersQuery() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _gitUsers.USERS_QUERY:
      return action.query;
    default:
      return state;
  }
}

var usersInitState = {
  isFetching: false,
  didInvalidate: false,
  totalCount: 0,
  users: [],
  error: null
};

function users() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? usersInitState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _gitUsers.INVALIDATE_USERS_PAGE:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case _gitUsers.USERS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case _gitUsers.USERS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        totalCount: action.totalCount,
        users: action.users,
        error: null
      });
    case _gitUsers.USERS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        error: action.error
      });
    case _gitUsers.CLEAR_USERS:
      return usersInitState;

    default:
      return state;
  }
}

function usersByPage() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _gitUsers.INVALIDATE_USERS_PAGE:
    case _gitUsers.USERS_REQUEST:
    case _gitUsers.USERS_SUCCESS:
    case _gitUsers.USERS_FAILURE:
      return Object.assign({}, state, _defineProperty({}, action.page, users(state[action.page], action)));
    case _gitUsers.CLEAR_USERS:
      return {};
    default:
      return state;
  }
}
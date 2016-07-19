'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USERS_FAILURE = exports.USERS_SUCCESS = exports.USERS_REQUEST = exports.INVALIDATE_USERS_PAGE = exports.CLEAR_USERS = exports.USERS_QUERY = exports.SELECT_USERS_PAGE = undefined;
exports.selectUsersPage = selectUsersPage;
exports.usersQuery = usersQuery;
exports.clearUsers = clearUsers;
exports.invalidateUsersPage = invalidateUsersPage;
exports.fetchTopUsersIfNeeded = fetchTopUsersIfNeeded;
exports.fetchUsersForQuery = fetchUsersForQuery;

require('isomorphic-fetch');

var _api = require('../utils/api');

var SELECT_USERS_PAGE = exports.SELECT_USERS_PAGE = 'SELECT_USERS_PAGE';
var USERS_QUERY = exports.USERS_QUERY = 'USERS_QUERY';
var CLEAR_USERS = exports.CLEAR_USERS = 'CLEAR_USERS';
var INVALIDATE_USERS_PAGE = exports.INVALIDATE_USERS_PAGE = 'INVALIDATE_USERS_PAGE';

var USERS_REQUEST = exports.USERS_REQUEST = 'USERS_REQUEST';
var USERS_SUCCESS = exports.USERS_SUCCESS = 'USERS_SUCCESS';
var USERS_FAILURE = exports.USERS_FAILURE = 'USERS_FAILURE';

function selectUsersPage(page) {
  return {
    type: SELECT_USERS_PAGE,
    page: page
  };
}

function usersQuery(query) {
  return {
    type: USERS_QUERY,
    query: query
  };
}

function clearUsers() {
  return {
    type: CLEAR_USERS
  };
}

function invalidateUsersPage(page) {
  return {
    type: INVALIDATE_USERS_PAGE,
    page: page
  };
}

function usersRequest(page) {
  return {
    type: USERS_REQUEST,
    page: page
  };
}

// This is a curried function that takes page as argument,
// and expects payload as argument to be passed upon API call success.
function usersSuccess(page) {
  return function (payload) {
    return {
      type: USERS_SUCCESS,
      page: page,
      users: payload.items,
      totalCount: payload.total_count
    };
  };
}

// This is a curried function that takes page as argument,
// and expects error as argument to be passed upon API call failure.
function usersFailure(page) {
  return function (error) {
    return {
      type: USERS_FAILURE,
      page: page,
      error: error
    };
  };
}

var API_ROOT = 'https://api.github.com';

function fetchUsers(page, query) {

  var query_params = 'q=' + (query || 'followers:>0');

  var url = API_ROOT + '/search/users?' + query_params + '&order=desc&page=' + page;
  return (0, _api.callApi)(url, null, usersRequest, usersSuccess(page), usersFailure(page));
}

function shouldFetchUsers(state, page) {
  // Check cache first
  var users = state.usersByPage[page];
  if (!users) {
    // Not cached, should fetch
    return true;
  }

  if (users.isFetching) {
    // Shouldn't fetch since fetching is running
    return false;
  }

  // Should fetch if cache was invalidate
  return users.didInvalidate;
}

function fetchTopUsersIfNeeded(page, query) {
  return function (dispatch, getState) {
    if (shouldFetchUsers(getState(), page)) {
      return dispatch(fetchUsers(page, query));
    }
  };
}

function fetchUsersForQuery(query) {
  return function (dispatch, getState) {
    return dispatch(fetchUsers(1, query));
  };
}
import 'isomorphic-fetch';
import {  callApi } from '../utils/api';
import config from '../config';

export const SELECT_USERS_PAGE = 'SELECT_USERS_PAGE';
export const USERS_QUERY = 'USERS_QUERY';
export const CLEAR_USERS = 'CLEAR_USERS';
export const INVALIDATE_USERS_PAGE = 'INVALIDATE_USERS_PAGE';

export const USERS_REQUEST = 'USERS_REQUEST';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_FAILURE = 'USERS_FAILURE';

export function selectUsersPage(page) {
  return {
    type: SELECT_USERS_PAGE,
    page,
  };
}

export function setUsersQuery(query) {
  return {
    type: USERS_QUERY,
    query,
  };
}

export function clearUsers() {
  return {
    type: CLEAR_USERS,
  };
}

export function invalidateUsersPage(page) {
  return {
    type: INVALIDATE_USERS_PAGE,
    page,
  };
}

function usersRequest(page) {
  return {
    type: USERS_REQUEST,
    page,
  };
}

// This is a curried function that takes page as argument,
// and expects payload as argument to be passed upon API call success.
function usersSuccess(page) {
  return function (payload) {
    return {
      type: USERS_SUCCESS,
      page,
      users: payload.items,
      totalCount: payload.total_count,
    };
  };
}

// This is a curried function that takes page as argument,
// and expects error as argument to be passed upon API call failure.
function usersFailure(page) {
  return function (error) {
    return {
      type: USERS_FAILURE,
      page,
      error,
    };
  };
}

function fetchUsers(page, query) {

  let query_params='q='+(query||'followers:>0');
  const url = `${config.api.root}/search/users?${query_params}&order=desc&page=${page}`;
  return callApi(url, null, usersRequest, usersSuccess(page), usersFailure(page));
}

function shouldFetchUsers(state, page) {
  // Check cache first
  const users = state.usersByPage[page];
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

export function fetchTopUsersIfNeeded(page, query) {
  return (dispatch, getState) => {
    if (shouldFetchUsers(getState(), page)) {
      return dispatch(fetchUsers(page, query));
    }
  };
}

export function fetchUsersForQuery(query) {
  return (dispatch, getState) => {
    return dispatch(fetchUsers(1,query));

  };
}

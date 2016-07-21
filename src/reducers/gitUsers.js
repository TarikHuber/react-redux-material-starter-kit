import {
  SELECT_USERS_PAGE,
  USERS_QUERY,
  CLEAR_USERS,
  INVALIDATE_USERS_PAGE,
  USERS_REQUEST,
  USERS_SUCCESS,
  USERS_FAILURE } from '../actions/gitUsers';

  export function selectedUsersPage(state = 1, action) {
    switch (action.type) {
      case SELECT_USERS_PAGE:
      return action.page;
      default:
      return state;
    }
  }

  export function usersQuery(state = '', action) {
    switch (action.type) {
      case USERS_QUERY:
      return action.query;
      default:
      return state;
    }
  }

  const usersInitState={
    isFetching: false,
    didInvalidate: false,
    totalCount: 0,
    users: [],
    error: null,
  }


  function users(state = usersInitState, action) {
    switch (action.type) {
      case INVALIDATE_USERS_PAGE:
      return Object.assign({}, state, {
        didInvalidate: true,
      });
      case USERS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
      case USERS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        totalCount: action.totalCount,
        users: action.users,
        error: null,
      });
      case USERS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        error: action.error,
      });
      case CLEAR_USERS:
      return usersInitState;

      default:
      return state;
    }
  }

  export function usersByPage(state = { }, action) {
    switch (action.type) {
      case INVALIDATE_USERS_PAGE:
      case USERS_REQUEST:
      case USERS_SUCCESS:
      case USERS_FAILURE:
      return Object.assign({}, state, {
        [action.page]: users(state[action.page], action)
      });
      case CLEAR_USERS:
      return {};
      default:
      return state;
    }
  }

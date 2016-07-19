'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectedReposPage = selectedReposPage;
exports.reposQuery = reposQuery;
exports.reposByPage = reposByPage;

var _repos = require('../actions/repos');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function selectedReposPage() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _repos.SELECT_REPOS_PAGE:
      return action.page;
    default:
      return state;
  }
}

function reposQuery() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _repos.REPOS_QUERY:
      return action.query;
    default:
      return state;
  }
}

var reposInitState = {
  isFetching: false,
  didInvalidate: false,
  totalCount: 0,
  repos: [],
  error: null
};

function repos() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? reposInitState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _repos.INVALIDATE_REPOS_PAGE:
      return Object.assign({}, state, {
        didInvalidate: true
      });

    case _repos.REPOS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case _repos.REPOS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        totalCount: action.total_count,
        repos: action.repos,
        error: null
      });
    case _repos.REPOS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        error: action.error
      });
    case _repos.CLEAR_REPOS:
      return reposInitState;

    default:
      return state;
  }
}

function reposByPage() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _repos.INVALIDATE_REPOS_PAGE:
    case _repos.REPOS_REQUEST:
    case _repos.REPOS_SUCCESS:
    case _repos.REPOS_FAILURE:
      return Object.assign({}, state, _defineProperty({}, action.page, repos(state[action.page], action)));
    case _repos.CLEAR_REPOS:
      return {};
    default:
      return state;
  }
}
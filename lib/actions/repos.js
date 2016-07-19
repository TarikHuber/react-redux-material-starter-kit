'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REPOS_FAILURE = exports.REPOS_SUCCESS = exports.REPOS_REQUEST = exports.INVALIDATE_REPOS_PAGE = exports.CLEAR_REPOS = exports.REPOS_QUERY = exports.SELECT_REPOS_PAGE = undefined;
exports.selectReposPage = selectReposPage;
exports.reposQuery = reposQuery;
exports.clearRepos = clearRepos;
exports.invalidateReposPage = invalidateReposPage;
exports.fetchTopReposIfNeeded = fetchTopReposIfNeeded;
exports.fetchReposForQuery = fetchReposForQuery;

require('isomorphic-fetch');

var _api = require('../utils/api');

var SELECT_REPOS_PAGE = exports.SELECT_REPOS_PAGE = 'SELECT_REPOS_PAGE';
var REPOS_QUERY = exports.REPOS_QUERY = 'REPOS_QUERY';
var CLEAR_REPOS = exports.CLEAR_REPOS = 'CLEAR_REPOS';
var INVALIDATE_REPOS_PAGE = exports.INVALIDATE_REPOS_PAGE = 'INVALIDATE_REPOS_PAGE';

var REPOS_REQUEST = exports.REPOS_REQUEST = 'REPOS_REQUEST';
var REPOS_SUCCESS = exports.REPOS_SUCCESS = 'REPOS_SUCCESS';
var REPOS_FAILURE = exports.REPOS_FAILURE = 'REPOS_FAILURE';

function selectReposPage(page) {
  return {
    type: SELECT_REPOS_PAGE,
    page: page
  };
}

function reposQuery(query) {
  return {
    type: REPOS_QUERY,
    query: query
  };
}

function clearRepos() {
  return {
    type: CLEAR_REPOS
  };
}

function invalidateReposPage(page) {
  return {
    type: INVALIDATE_REPOS_PAGE,
    page: page
  };
}

function reposRequest(page) {
  return {
    type: REPOS_REQUEST,
    page: page
  };
}

// This is a curried function that takes page as argument,
// and expects payload as argument to be passed upon API call success.
function reposSuccess(page, query) {
  return function (payload) {
    return {
      type: REPOS_SUCCESS,
      page: page,
      repos: payload.items,
      totalCount: payload.total_count,
      query: query
    };
  };
}

// This is a curried function that takes page as argument,
// and expects error as argument to be passed upon API call failure.
function reposFailure(page) {
  return function (error) {
    return {
      type: REPOS_FAILURE,
      page: page,
      error: error
    };
  };
}

var API_ROOT = 'https://api.github.com';

function fetchRepos(page, query) {

  var query_params = 'q=' + (query || 'stars:>0');

  var url = API_ROOT + '/search/repositories?' + query_params + '&order=desc&page=' + page;

  return (0, _api.callApi)(url, null, reposRequest(page, query), reposSuccess(page, query), reposFailure(page, query));
}

function shouldFetchRepos(state, page) {
  // Check cache first
  var repos = state.reposByPage[page];
  if (!repos) {
    // Not cached, should fetch
    return true;
  }

  if (repos.isFetching) {
    // Shouldn't fetch since fetching is running
    return false;
  }

  // Should fetch if cache was invalidate
  return repos.didInvalidate;
}

function fetchTopReposIfNeeded(page, query) {
  return function (dispatch, getState) {
    if (shouldFetchRepos(getState(), page)) {
      return dispatch(fetchRepos(page, query));
    }
  };
}

function fetchReposForQuery(query) {

  return function (dispatch, getState) {
    return dispatch(fetchRepos(1, query));
  };
}
import 'isomorphic-fetch';
import { callApi } from '../utils/api';
import config from '../config';

export const SELECT_REPOS_PAGE = 'SELECT_REPOS_PAGE';
export const REPOS_QUERY = 'REPOS_QUERY';
export const CLEAR_REPOS = 'CLEAR_REPOS';
export const INVALIDATE_REPOS_PAGE = 'INVALIDATE_REPOS_PAGE';

export const REPOS_REQUEST = 'REPOS_REQUEST';
export const REPOS_SUCCESS = 'REPOS_SUCCESS';
export const REPOS_FAILURE = 'REPOS_FAILURE';

export function selectReposPage(page) {
  return {
    type: SELECT_REPOS_PAGE,
    page,
  };
}

export function setReposQuery(query) {
  return {
    type: REPOS_QUERY,
    query,
  };
}

export function clearRepos() {
  return {
    type: CLEAR_REPOS,
  };
}

export function invalidateReposPage(page) {
  return {
    type: INVALIDATE_REPOS_PAGE,
    page,
  };
}

function reposRequest(page) {
  return {
    type: REPOS_REQUEST,
    page,
  };
}

// This is a curried function that takes page as argument,
// and expects payload as argument to be passed upon API call success.
function reposSuccess(page, query) {
  return function (payload) {
    return {
      type: REPOS_SUCCESS,
      page,
      repos: payload.items,
      totalCount: payload.total_count,
      query:query,
    };
  };
}

// This is a curried function that takes page as argument,
// and expects error as argument to be passed upon API call failure.
function reposFailure(page) {
  return function (error) {
    return {
      type: REPOS_FAILURE,
      page,
      error,
    };
  };
}

function fetchRepos(page, query) {

  let query_params='q='+(query||'stars:>0');

  const url = `${config.api.root}/search/repositories?${query_params}&order=desc&page=${page}`;

  return callApi(url, null, reposRequest(page, query), reposSuccess(page, query), reposFailure(page, query));
}

function shouldFetchRepos(state, page) {
  // Check cache first
  const repos = state.reposByPage[page];
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

export function fetchTopReposIfNeeded(page, query) {
  return (dispatch, getState) => {
    if (shouldFetchRepos(getState(), page)) {
      return dispatch(fetchRepos(page, query));
    }
  };
}

export function fetchReposForQuery(query) {

  return (dispatch, getState) => {
    return dispatch(fetchRepos(1, query));
  };

}

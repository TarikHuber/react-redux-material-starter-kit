import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { invalidateReposPage,	selectReposPage, fetchTopReposIfNeeded,	fetchReposForQuery,	setReposQuery, clearRepos} from '../../actions/repos';
import Repos from '../../components/Repos/Repos';
import { setFilterNavOpen } from '../../actions/filterNav';

function mapStateToProps(state) {
	const { intl, selectedReposPage, reposByPage, reposQuery} = state;
	const page = selectedReposPage ? selectedReposPage : 1;
	if (!reposByPage[page]) {
		return {
			page: page,
			messages: intl.messages,
			error: null,
			isFetching: false,
			didInvalidate: false,
			totalCount: 0,
			repos: [],
			reposQuery: reposQuery,
		};
	}

	return {
		page: page,
		messages: intl.messages,
		error: reposByPage[page].error,
		isFetching: reposByPage[page].isFetching,
		didInvalidate: reposByPage[page].didInvalidate,
		totalCount: reposByPage[page].totalCount,
		repos: reposByPage[page].repos,
		reposQuery: reposQuery,
	};
}

const mapDispatchToProps = (dispatch) => {

	return {
		invalidateReposPage: (page, usersQuery) => {
			dispatch(invalidateReposPage(page, usersQuery));
		},
		selectReposPage: (page) => {
			dispatch(selectReposPage(page));
		},
		fetchTopReposIfNeeded: (page, usersQuery) => {
			dispatch(fetchTopReposIfNeeded(page, usersQuery));
		},
		clearRepos: () => {
			dispatch(clearRepos());
		},
		fetchReposForQuery: (page, usersQuery) => {
			dispatch(fetchReposForQuery(page, usersQuery));
		},
		setReposQuery: (query) => {
			dispatch(setReposQuery(query));
		},
		setFilterNavOpen: (open)=>{
				dispatch(setFilterNavOpen(open));
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Repos);

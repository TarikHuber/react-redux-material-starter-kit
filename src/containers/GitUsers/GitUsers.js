import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { invalidateUsersPage, selectUsersPage, fetchTopUsersIfNeeded, fetchUsersForQuery, setUsersQuery, clearUsers } from '../../actions/gitUsers';
import GitUsers from '../../components/GitUsers/GitUsers'

function mapStateToProps(state) {
	const { intl,  selectedUsersPage, usersByPage, usersQuery} = state;
	const page = selectedUsersPage || 1;

	if (!usersByPage || !usersByPage[page]) {
		return {
			page,
			messages: intl.messages,
			isFetching: false,
			didInvalidate: false,
			totalCount: 0,
			users: [],
			error: null,
			usersQuery: usersQuery,
		};
	}

	return {
		page,
		messages: intl.messages,
		error: usersByPage[page].error,
		isFetching: usersByPage[page].isFetching,
		didInvalidate: usersByPage[page].didInvalidate,
		totalCount: usersByPage[page].totalCount,
		users: usersByPage[page].users,
		usersQuery:usersQuery,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		invalidateUsersPage: (page, usersQuery) => {
			dispatch(invalidateUsersPage(page, usersQuery));
		},
		selectUsersPage: (page) => {
			dispatch(selectUsersPage(page));
		},
		fetchTopUsersIfNeeded: (page, usersQuery) => {
			dispatch(fetchTopUsersIfNeeded(page, usersQuery));
		},
		clearUsers: () => {
			dispatch(clearUsers());
		},
		fetchUsersForQuery: (page, usersQuery) => {
			dispatch(fetchUsersForQuery(page, usersQuery));
		},
		setUsersQuery: (query) => {
			dispatch(setUsersQuery(query));
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GitUsers);

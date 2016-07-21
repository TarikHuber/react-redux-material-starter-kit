import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleDrawerOpen, setDrawerOpen ,setSelectedIndex} from '../../actions/navigation';
import {  push } from 'react-router-redux'
import {updateTitle} from 'redux-title'
import AppNavDrawerContent from '../../components/AppNavDrawer/AppNavDrawerContent';

const mapStateToProps = (state) => {
	const { intl, auth, navigation, browser } = state;
	return {
		navigation: navigation,
		browser: browser,
		auth: auth,
		messages: intl.messages,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleDrawerOpen: () => {
			dispatch(toggleDrawerOpen())
		},
		setDrawerOpen: (open) => {
			dispatch(setDrawerOpen(open))
		},
		to: (path)=>{
			dispatch(push(path))
		},
		updateTitle:(title)=>{
			dispatch(updateTitle(title));
		}


	}
};

export default connect(
	mapStateToProps,mapDispatchToProps
)(AppNavDrawerContent);

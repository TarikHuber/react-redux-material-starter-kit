import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import Activity from '../../components/Activity/Activity';
import Responsive from '../../components/Responsive/Responsive';

function mapStateToProps(state) {

	 const { browser} = state;

	 return {

			browser: browser,
		 };

}

export default connect(mapStateToProps)(Responsive);

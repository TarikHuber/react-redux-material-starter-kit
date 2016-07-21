import React, {  Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {updateTitle} from 'redux-title'
import PropsAndDispatchExample from '../../components/BasicExamples/PropsAndDispatchExample'

function mapStateToProps(state) {

	const { title} = state;

	return {
		title:title,
	};

}

const mapDispatchToProps = (dispatch) => {
	return {
		updateTitle: (title) => {
			dispatch(updateTitle(title));
		},

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PropsAndDispatchExample);

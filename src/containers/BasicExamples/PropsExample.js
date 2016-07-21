import React, {  Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PropsExample from '../../components/BasicExamples/PropsExample'

function mapStateToProps(state) {

	const { intl} = state;

	return {
		intl:intl,
	};

}

export default connect(mapStateToProps)(PropsExample);

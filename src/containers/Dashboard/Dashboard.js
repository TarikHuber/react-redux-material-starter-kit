import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Dashboard from '../../components/Dashboard/Dashboard';
import {onLayoutChange} from '../../actions/dashboard';

function mapStateToProps(state) {

  const {browser, intl ,dashboard} = state;

  return {
    dashboard: dashboard,
    messages:intl.messages,
    browser: browser,
  };

}

const mapDispatchToProps = (dispatch) => {
  return {

    onLayoutChange:(layout)=>{
      dispatch(onLayoutChange(layout));
    },

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleDrawerOpen } from '../../actions/navigation';
import HeaderAppBar from '../../components/HeaderAppBar/HeaderAppBar';

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawerOpen: () => {
      dispatch(toggleDrawerOpen())
    },
  }
};

export default connect(
  undefined,mapDispatchToProps
)(HeaderAppBar);

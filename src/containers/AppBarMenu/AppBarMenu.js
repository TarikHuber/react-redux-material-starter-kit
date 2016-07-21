import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AppBarMenu from '../../components/AppBarMenu/AppBarMenu';

const mapStateToProps = (state) => {
  const {appStyle } = state;
  return {
    appStyle:appStyle,
  };
};

export default connect(
  mapStateToProps
)(AppBarMenu);

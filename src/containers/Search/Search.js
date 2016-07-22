import React from 'react';
import { connect } from 'react-redux';
import Search from '../../components/Search/Search';

function mapStateToProps(state) {

  const { appStyle } = state;

  return {
    appStyle: appStyle,
  };

}

export default connect(mapStateToProps)(Search);

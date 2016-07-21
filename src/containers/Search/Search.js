import React from 'react';
import { connect } from 'react-redux';
import Search from '../../components/Search/Search';

function mapStateToProps(state) {

  const { intl, appStyle } = state;

  return {
    messages:intl.messages,
    appStyle: appStyle,
  };

}

export default connect(mapStateToProps)(Search);

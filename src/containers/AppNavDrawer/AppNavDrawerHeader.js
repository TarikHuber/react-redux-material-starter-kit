import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  push } from 'react-router-redux'
import { toggleDrawerOpen } from '../../actions/navigation';
import {setSignInDialogOpen} from '../../actions/signIn';
import {logout} from '../../actions/auth';
import AppNavDrawerHeader from '../../components/AppNavDrawer/AppNavDrawerHeader';

const mapStateToProps = (state) => {
  const {intl, auth, appStyle } = state;
  return {
    appStyle:appStyle,
    auth: auth,
    messages: intl.messages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

    setSignInDialogOpen:(open)=>{
      dispatch(setSignInDialogOpen(open));
    },
    logout:()=>{
      dispatch(logout());
    },
    to: (path)=>{
      dispatch(push(path))
    },
    toggleDrawerOpen: () => {
      dispatch(toggleDrawerOpen())
    },

  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(AppNavDrawerHeader);

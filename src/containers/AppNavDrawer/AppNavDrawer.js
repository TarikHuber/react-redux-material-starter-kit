import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleDrawerOpen } from '../../actions/appNavDrawer';
import {Drawer } from 'material-ui';
import AppNavDrawerFooter from '../../components/AppNavDrawer/AppNavDrawerFooter';
import AppNavDrawerHeader from './AppNavDrawerHeader';
import AppNavDrawerContent from './AppNavDrawerContent';
  
	
class AppNavDrawer extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { docked, toggleDrawerOpen, appNavDrawer } = this.props;
	
	let drawerP = {...appNavDrawer,
		docked: docked,
		open:docked?docked:appNavDrawer.open,
		onRequestChange:() => toggleDrawerOpen(),
    };

    return (	
	
		<Drawer {...drawerP} >
			<AppNavDrawerHeader/>
			<AppNavDrawerContent location={this.props.location}/>
			<AppNavDrawerFooter/>
		</Drawer>		

    );

  }
}

AppNavDrawer.propTypes = {
  docked: PropTypes.bool,
  toggleDrawerOpen: PropTypes.func.isRequired,
  appNavDrawer: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const {  appNavDrawer, browser } = state;
  return {
	appNavDrawer: appNavDrawer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawerOpen: () => {
      dispatch(toggleDrawerOpen());
    },

  }
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(AppNavDrawer);
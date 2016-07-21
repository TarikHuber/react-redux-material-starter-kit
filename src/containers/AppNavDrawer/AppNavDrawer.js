import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleDrawerOpen } from '../../actions/navigation';
import {Drawer } from 'material-ui';
import AppNavDrawerFooter from '../../components/AppNavDrawer/AppNavDrawerFooter';
import AppNavDrawerHeader from './AppNavDrawerHeader';
import AppNavDrawerContent from './AppNavDrawerContent';
import DockedContainer from '../../containers/DockedContainer/DockedContainer';

class AppNavDrawer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { docked, toggleDrawerOpen, navigation } = this.props;

	let drawerP = {...navigation,
		docked: docked,
		open:docked?docked:navigation.open,
		onRequestChange:() => toggleDrawerOpen(),
    };

    return (

		<Drawer {...drawerP} >
			<AppNavDrawerHeader/>
      <DockedContainer>
			     <AppNavDrawerContent location={this.props.location}/>
      </DockedContainer>
			<AppNavDrawerFooter/>
		</Drawer>

    );

  }
}

AppNavDrawer.propTypes = {
  docked: PropTypes.bool,
  toggleDrawerOpen: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const {  navigation, browser } = state;
  return {
	navigation: navigation,
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

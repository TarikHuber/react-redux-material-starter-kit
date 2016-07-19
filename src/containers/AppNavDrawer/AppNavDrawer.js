import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleDrawerOpen , setSelectedIndex} from '../../actions/appNavDrawer';
import {Drawer , MenuItem, AppBar, ListItem } from 'material-ui';
import AppNavDrawerFooter from '../../components/AppNavDrawer/AppNavDrawerFooter';
import AppNavDrawerHeader from './AppNavDrawerHeader';
import AppNavDrawerContent from './AppNavDrawerContent';
  
const styles={

	  header:{
		height: '100%',
		overflow: 'hidden',

	  },
	  paper:{
		display: 'inline-block',
		margin: '16px 32px 16px 0',
	  }
	  
};


function browserSelector({browser}) {
	return {browser}
}
	
class AppNavDrawer extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { setSelectedIndex, drawerProps, toggleDrawerOpen, browser } = this.props;

	let docked=browser.greaterThan.medium&&drawerProps.responsive;	
	
	function handleDrawerToggle(){
		toggleDrawerOpen();
	}
	
	let drawerP = {...drawerProps,
		docked: docked,
		open:docked?docked:drawerProps.open,
		onRequestChange:() => toggleDrawerOpen(),
    };

    return (	
	
	    <div style={styles.header}>	
			<Drawer {...drawerP} >
				<AppNavDrawerHeader/>
				<AppNavDrawerContent location={this.props.location}/>
				<AppNavDrawerFooter/>
			</Drawer>		
		</div>
    );

  }
}

AppNavDrawer.propTypes = {
  drawerProps: PropTypes.object.isRequired,
  toggleDrawerOpen: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
  browser: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => {
  const {  appNavDrawer, browser } = state;
  return {
	drawerProps: appNavDrawer,
	browser: browser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawerOpen: () => {
      dispatch(toggleDrawerOpen());
    },
	setSelectedIndex:(index)=>{
		dispatch(setSelectedIndex(index));
	}

  }
};

export default connect(
  mapStateToProps,mapDispatchToProps
)(AppNavDrawer);
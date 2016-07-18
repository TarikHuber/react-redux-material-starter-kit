import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {StyleSheet} from 'redux-responsive'

import { toggleDrawerOpen } from '../../actions/appNavDrawer';
import AppNavDrawer from '../../containers/AppNavDrawer/AppNavDrawer';
import AppBar from 'material-ui/AppBar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import {cyan500, indigo800,grey50} from 'material-ui/styles/colors';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

const primaryColor='#00387b';
const margingLeft='256px';


const styles={
	 appBar_docked: {
        position: 'fixed',
		zIndex:2,
		
        top: 0,
		height:64,
		marginLeft: '256px',
		marginRight: '256px',
		_lessThan_medium: {
            marginLeft: '0px',
		marginRight: '0px',
        }
      },
	  appBar_undocked: {
        position: 'fixed',
		zIndex:2,
        top: 0,
		height:64,
		marginLeft: '0px',
		marginRight: '0px',
      },
	  content_docked:{
		marginLeft: '256px',
		
		padding: '0px',
	  },
	  content_undocked:{
		marginLeft: '0px',
	
		padding: '0px',
	  },
	  appBarMenu_docked:{
		  marginRight:'256px',
	  },
	  appBarMenu_undocked:{
		  marginRight:'0px',
	  }
};

const muiTheme = {
  palette: {
	primary1Color:primaryColor,
  },

};

function browserSelector({browser}) {
	return {browser}
};




class App extends Component {
  constructor(props) {
    super(props);
  }
  
  
  
	
  render() {
    const {appStyle, toggleDrawerOpen, browser, appBar } = this.props;


	let docked=(browser.greaterThan.medium)?true:false;	

    let contentStyle=docked?styles.content_docked:styles.content_undocked;
	let appBarStyle=docked?styles.appBar_docked:styles.appBar_undocked;
	let appBarMenuStyle=docked?styles.appBarMenu_docked:styles.appBarMenu_undocked;
	 
    return (
	
	<MuiThemeProvider muiTheme={getMuiTheme(appStyle.theme.source)}>
		<div>
			<AppNavDrawer location={this.props.location}/>			
			<div>				
			    <div style={contentStyle} >
					{this.props.children}
				</div>
			</div>	
					
		</div>  	
     </MuiThemeProvider>
				
		
    );

  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  toggleDrawerOpen: PropTypes.func.isRequired,
  browser: PropTypes.object.isRequired,
  appStyle: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};


App.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
 
};

const mapStateToProps = (state) => {
  const {appStyle, sidebar, responsiveStateReducer } = state;
  return {
	browser: responsiveStateReducer,
	appStyle:appStyle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawerOpen: () => {
      dispatch(toggleDrawerOpen())
    },
  }
};

export default connect(
  mapStateToProps,mapDispatchToProps
)(App);
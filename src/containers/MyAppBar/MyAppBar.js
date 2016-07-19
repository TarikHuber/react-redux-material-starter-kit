import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import { toggleDrawerOpen } from '../../actions/appNavDrawer';

const styles={
	 appBar: {
		position:'fixed', 
		zIndex:2,
		zDepth:2,
        top: 0,
		height:64,
      },
	  appBarMenu_docked:{
		  marginRight:'256px',
	  },
	  appBarMenu_undocked:{
		  marginRight:'0px',
	  }
};

class MyAppBar extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		const {title, menu, toggleDrawerOpen, browser , appNavDrawer} = this.props;

		let docked=browser.greaterThan.medium && appNavDrawer.responsive;	
		let appBarMenuStyle=docked?styles.appBarMenu_docked:styles.appBarMenu_undocked; 
		let rightMenu=<div style={appBarMenuStyle}>{menu}</div>;

		return (
			<header>
				<AppBar 
					title={title||''} 
					onLeftIconButtonTouchTap={()=>toggleDrawerOpen()}
					zDepth={1}
					iconElementRight={rightMenu}
					style={styles.appBar}
					showMenuIconButton={!docked}
				/>
			</header>
		);
	}
}

MyAppBar.propTypes = {
	toggleDrawerOpen: PropTypes.func.isRequired,
	browser: PropTypes.object.isRequired,
	title: PropTypes.string,
	menu: PropTypes.object,
	appNavDrawer: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => {
  const {browser, appNavDrawer } = state;
  return {
	browser: browser,
	appNavDrawer: appNavDrawer,
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
)(MyAppBar);
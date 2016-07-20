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

class HeaderAppBar extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		const {title, menu, toggleDrawerOpen, docked} = this.props;
	
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

HeaderAppBar.propTypes = {
	toggleDrawerOpen: PropTypes.func.isRequired,
	title: PropTypes.string,
	menu: PropTypes.object,
	docked: PropTypes.bool,
};

export default (HeaderAppBar);
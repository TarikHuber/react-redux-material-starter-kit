import React, { Component, PropTypes } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { connect } from 'react-redux';

const styles={
	docked:{
		position: 'fixed',
		zIndex:3,
		left:300,	
		bottom: 35,
	},
	undocked:{
		position: 'fixed',
		zIndex:3,
		left:30,	
		bottom: 35,
	}
	
}

class BottomLeftFAB extends Component {
  constructor(props) {
    super(props)
	
  };
  
  render() {
    const {  onTouchTap, icon, secondary , browser, appNavDrawer} = this.props
	
	let docked=browser.greaterThan.medium && appNavDrawer.responsive;
	let style=docked?styles.docked:styles.undocked; 
	
    return (

		<FloatingActionButton 
			secondary={secondary}
			style={style}
			onTouchTap={onTouchTap}
			>		
			{icon}
		</FloatingActionButton>

    )
  }
}

BottomLeftFAB.propTypes = {
	browser: PropTypes.object.isRequired,
	appNavDrawer: PropTypes.object.isRequired,
	onTouchTap: PropTypes.func,
	icon: PropTypes.object,
	secondary: PropTypes.bool
}

const mapStateToProps = (state) => {
  const {browser, appNavDrawer } = state;
  return {
	browser: browser,
	appNavDrawer: appNavDrawer,
  };
};

export default connect(
  mapStateToProps
)(BottomLeftFAB);

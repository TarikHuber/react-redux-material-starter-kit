import React, { Component, PropTypes } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';

const style={
	position: 'fixed',
	zIndex:3,
	right:30,	
	bottom: 35,
}

class BottomLeftFAB extends Component {
  constructor(props) {
    super(props)
	
  };
  
  render() {
    const {  onTouchTap, icon, secondary } = this.props
	
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

	onTouchTap: PropTypes.func,
	icon: PropTypes.object,
	secondary: PropTypes.bool
}

export default (BottomLeftFAB);

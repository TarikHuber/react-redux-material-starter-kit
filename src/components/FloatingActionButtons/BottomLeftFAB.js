import React, { Component, PropTypes } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';

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
		const {  onTouchTap, icon, secondary , docked} = this.props

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
	docked: PropTypes.bool,
	onTouchTap: PropTypes.func,
	icon: PropTypes.object,
	secondary: PropTypes.bool
}


export default (BottomLeftFAB);

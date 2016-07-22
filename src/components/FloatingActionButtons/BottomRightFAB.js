import React, { Component, PropTypes } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';



class BottomLeftFAB extends Component {
	constructor(props) {
		super(props)

	};

	render() {
		const {  onTouchTap, icon, secondary } = this.props

		const style={
			position: 'fixed',
			zIndex:3,
			right:this.props.right||30,
			bottom: 35,
		}

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
	right: PropTypes.number,
	onTouchTap: PropTypes.func,
	icon: PropTypes.object,
	secondary: PropTypes.bool
}

export default (BottomLeftFAB);

import React, { Component, PropTypes } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';

const styles={

	main_container:{
		float: 'left',
		position: 'relative',
		left: '40%',
	},

	fixer_container:{
		float: 'left',
		position: 'relative',
		left: '-35%',

	},

	button: {
		position: 'fixed',
		zIndex:3,
		bottom: 35,
	}

}

class BottomMiddleFAB extends Component {
	constructor(props) {
		super(props)

	};

	render() {
		const {  onTouchTap, icon, secondary } = this.props

		return (


			<div style={styles.main_container}>
				<div style={styles.fixer_container}>
					<FloatingActionButton
						style={styles.button}
						secondary={secondary}
						onTouchTap={onTouchTap}
						>
						{icon}
					</FloatingActionButton>
				</div>
			</div>



		)
	}
}

BottomMiddleFAB.propTypes = {
	onTouchTap: PropTypes.func,
	icon: PropTypes.object,
	secondary: PropTypes.bool
}


export default (BottomMiddleFAB);

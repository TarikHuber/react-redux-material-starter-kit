import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';

const styles={
	appBar: {
		position: 'fixed',
		zIndex:2,
		bottom: 0,
		height:64,
		margin: '0px',
	},

}

class FooterAppBar extends Component {

	render() {
		return (
			<AppBar
				style={styles.appBar}
				iconElementLeft={<div/>}
				/>
		)
	}
}

export default (FooterAppBar);

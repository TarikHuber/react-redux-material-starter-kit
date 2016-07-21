import React, { Component, PropTypes } from 'react';

const styles={
	content_docked:{
		marginLeft: '256px',
	},
	content_undocked:{
		marginLeft: '0px',
	},
};

class ContentContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {docked } = this.props;

		let contentStyle=docked?styles.content_docked:styles.content_undocked;

		return (
			<div style={contentStyle} >
				{this.props.children}
			</div>
		);

	}
}

ContentContainer.propTypes = {
	children: PropTypes.node.isRequired,
	docked: PropTypes.bool,
};

export default (ContentContainer);

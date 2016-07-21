import React, { Component, PropTypes } from 'react';
import DockedContainer from '../../containers/DockedContainer/DockedContainer';
import HeaderAppBar from '../../containers/HeaderAppBar/HeaderAppBar';

const styles={
	content:{
		marginTop: '64px',
	},
};

class Activity extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { title, menu} =this.props;

		return (
			<div>
				<header>
					<DockedContainer>
						<HeaderAppBar
							title={title}
							menu={menu}
							/>
					</DockedContainer>
				</header>
				<div style={styles.content}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

Activity.propTypes = {
	children: PropTypes.object,
	title: PropTypes.string,
	menu: PropTypes.object,
};

export default (Activity);

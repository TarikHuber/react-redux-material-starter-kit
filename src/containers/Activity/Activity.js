import React, { Component, PropTypes } from 'react';
import MyAppBar from '../../containers/MyAppBar/MyAppBar';

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
					<MyAppBar 
						title={title} 
						menu={menu}
					/>	
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
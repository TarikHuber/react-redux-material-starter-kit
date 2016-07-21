import React, { Component } from 'react';
import { List, Subheader} from 'material-ui';
import Divider from 'material-ui/Divider';
import config from '../../config';

const styles={
	content:{
		marginLeft:'6px',
	}
};

class AppNavDrawerFooter extends Component {

	render() {

		return (
			<List >
				<Divider/>
				<Subheader>Copyright</Subheader>
				<p style={styles.content}>
					<span>&copy; {new Date().getFullYear()} {config.app.company} </span>
				</p>
			</List>
		);

	}
}

export default (AppNavDrawerFooter);

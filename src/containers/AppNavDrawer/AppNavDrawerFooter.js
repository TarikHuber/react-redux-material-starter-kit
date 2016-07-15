import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {Paper, List,Subheader} from 'material-ui';
import Divider from 'material-ui/Divider';

const primaryColor='#00387b';

const styles={
	  paper:{
		  position: 'absolute',
		  zIndex: '2',
		  bottom: '0',
		  height: '50px',
	  },
	  content:{
		  marginLeft:'6px',
	  }
	  
};

	
class AppNavDrawerFooter extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {

    return (	

		
			<List >
				<Divider/>
				<Subheader>Copyright</Subheader>
					<p style={styles.content}>
						<span>My Company &copy;</span>
					</p>
			
			</List>
			




    );

  }
}



export default (AppNavDrawerFooter);
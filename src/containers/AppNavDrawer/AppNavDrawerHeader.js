import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import {  push } from 'react-router-redux'
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionLock from 'material-ui/svg-icons/action/lock';
import RaisedButton from 'material-ui/RaisedButton';

import HardwareKeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import {setSignInDialogOpen, setSignInErrorText} from '../../actions/signIn';
import {logout} from '../../actions/auth';
import SignIn from '../../containers/Auth/SignIn';

import {
blue300,
indigo900,
orange200,
deepOrange300,
pink400,
purple500,
} from 'material-ui/styles/colors';


const styles = {
  button: {
	  
	marginTop: 45,
    marginLeft: 65,
  },
};

class AppNavDrawerHeader extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
	  
	 const {to ,logout, auth , appStyle, setSignInDialogOpen } = this.props;
	    
	 const style={

		  backgroundColor:appStyle.theme.source.palette.primary2Color,
		  color: appStyle.theme.source.palette.alternateTextColor,
		  padding: '6px',
		  height: 150,

 
	};
	
	function handleSignIn(){
		to('/signin');	
	}
	
	function handleSignOut(){
		logout();
		to('/signin');	
	}
	
	let headerContent=<div></div>;
	
	if(auth.apiToken===undefined){
		headerContent=
				<div>

					<RaisedButton
					  label="Sign in"
					  labelPosition="after"
					  secondary={true}
					  icon={<ActionLock />}
					  style={styles.button}
					  onClick={handleSignIn}
					/>
				</div>;
	}else{
		headerContent=
				<div>
					<Avatar
				  color={deepOrange300}
				  backgroundColor={purple500}
				  size={30}
				  style={{margin: 5}}
				>
				  U
				</Avatar>
				
				<IconMenu style={{float:'right',marginTop:'80'}}
				  iconButtonElement={<IconButton><HardwareKeyboardArrowDown color={'white'}/></IconButton>
				  }
				>
				  <MenuItem primaryText="Logout" onTouchTap={handleSignOut}/>

				</IconMenu>

				<p>{auth.user.name}</p>
				<div>{auth.user.email}</div>
				</div>;
	}
	
	
	
	
    return (	
		<Paper style={style}>
			{headerContent}
		</Paper>
    );

  }
}

AppNavDrawerHeader.propTypes = {
  appStyle: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  setSignInDialogOpen: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  to: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const {auth, appStyle } = state;
  return {
	appStyle:appStyle,
	auth: auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

	setSignInDialogOpen:(open)=>{
		dispatch(setSignInDialogOpen(open));
	},
	logout:()=>{
		dispatch(logout());
	},
	to: (path)=>{
		dispatch(push(path))
	},

  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(AppNavDrawerHeader);


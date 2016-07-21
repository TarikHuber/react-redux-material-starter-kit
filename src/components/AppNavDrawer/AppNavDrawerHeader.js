import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ActionLock from 'material-ui/svg-icons/action/lock';
import RaisedButton from 'material-ui/RaisedButton';
import HardwareKeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import SignIn from '../../containers/Auth/SignIn';
import { deepOrange300, purple500, } from 'material-ui/styles/colors';

export default class AppNavDrawerHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { messages, to ,logout, auth , appStyle, setSignInDialogOpen, toggleDrawerOpen } = this.props;

    const styles={
      paper:{
        backgroundColor:appStyle.theme.source.palette.primary2Color,
        color: appStyle.theme.source.palette.alternateTextColor,
        padding: '6px',
        height: 150,
      },
      button: {
        marginTop: 45,
        marginLeft: 65,
      },
      iconMenu:{
        float:'right',
        marginTop:'80px'
      }
    };

    function handleSignIn(){
      to('signin');
      toggleDrawerOpen();
    }

    function handleSignOut(){
      logout();
      to('signin');
    }

    let headerContent=<div></div>;

      if(auth.apiToken===undefined){
        headerContent=
        <div>

          <RaisedButton
            label={messages.signin||'signin'}
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

          <IconMenu
            style={styles.iconMenu}
            iconButtonElement={<IconButton><HardwareKeyboardArrowDown
              color={'white'}/></IconButton>
          }
          >
          <MenuItem
            primaryText={messages.signout||'signout'}
            onTouchTap={handleSignOut}/>

        </IconMenu>

        <p>{auth.user?auth.user.name:''}</p>
        <div>{auth.user?auth.user.email:''}</div>
      </div>;
    }

    return (
      <Paper style={styles.paper}>
        {headerContent}
      </Paper>
    );

  }
}

AppNavDrawerHeader.propTypes = {
  messages: PropTypes.object.isRequired,
  appStyle: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  setSignInDialogOpen: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  to: PropTypes.func.isRequired,
  toggleDrawerOpen: PropTypes.func.isRequired,
};

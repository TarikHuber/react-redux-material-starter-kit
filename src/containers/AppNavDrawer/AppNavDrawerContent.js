import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { toggleDrawerOpen, setDrawerOpen ,setSelectedIndex} from '../../actions/appNavDrawer';
import {Drawer , MenuItem, AppBar, ListItem } from 'material-ui';
import Paper from 'material-ui/Paper';
import {  push } from 'react-router-redux'

var ReactGridLayout = require('react-grid-layout');

import {List, Subheader, MakeSelectable} from 'material-ui';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionSettings  from 'material-ui/svg-icons/action/settings';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ActionLanguage  from 'material-ui/svg-icons/action/language';
import ContentFlag from 'material-ui/svg-icons/content/flag';
import ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import ActionHome from 'material-ui/svg-icons/action/home';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

import Folder from 'material-ui/svg-icons/file/folder';


import { messages } from './Messages/AppNavDrawerContent.i18n';


const styles={

	  header:{
		height: '100%',
		overflow: 'hidden',

	  },
	  paper:{
		display: 'inline-block',
		margin: '16px 32px 16px 0',
	  }
	  
};


function browserSelector({browser}) {
	return {browser}
}
	
class AppNavDrawerContent extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { auth, setAppBarTitle, setSelectedIndex, to, setDrawerOpen,drawerProps, toggleDrawerOpen, browser } = this.props;

	let docked=(browser.greaterThan.medium)?true:false;	
	const index=this.props.location?this.props.location.pathname:'/';
	
	function findMessage(path){
		return messages.path===path;
	}
	
	
	function handleClick(path){
			
		if(drawerProps.open){
			setDrawerOpen(false);
		}
		
		to(path);
		
	}
	
	let drawerP = {...drawerProps,
		docked: docked,
		open:docked?docked:drawerProps.open,
		onRequestChange:() => toggleDrawerOpen(),
    };
	
	let SelectableList = MakeSelectable(List);
	
	
	
	let restricted=<div></div>;
	
	if(auth.apiToken!==undefined){
		restricted=<div>
			<Divider />
			<Subheader>Restricted Examples</Subheader>	
			  <SelectableList value={index} onChange={(event, itemValue)=>handleClick(itemValue)}>
			  <ListItem 
				primaryText={<FormattedMessage {...messages['/responsive']}/>}
				leftIcon={<Folder />}
				primaryTogglesNestedList={true}
				nestedItems={[
					<ListItem value={'/responsive'} 
						primaryText={<FormattedMessage {...messages['/responsive']}/>} 
						rightIcon={<ActionInfo/>} />
				  
				]}
			  />
			  </SelectableList>

			  <SelectableList value={index} onChange={(event, itemValue)=>handleClick(itemValue)}>
			  <ListItem 
				primaryText='REST API'
				leftIcon={<Folder />}
				primaryTogglesNestedList={true}
				nestedItems={[
					<ListItem value={'/gitusers'} 
						primaryText='Git Users' 
						rightIcon={<ActionInfo/>}
											
					/>,
					<ListItem value={'/repos'} 
						primaryText='Repos' 
						rightIcon={<ActionInfo/>}
												
					/>
				  
				]}
			  />
			  </SelectableList>
		</div>;
	}
	
	

    return (	
			<div>

				<SelectableList value={index} onChange={(event, itemValue)=>handleClick(itemValue)}>
								
					<ListItem value={'/dashboard'} primaryText={<FormattedMessage {...messages['/dashboard']}/>} leftIcon={<ActionDashboard />} />
						<Divider />
						<Subheader>Public Examples</Subheader>	
					<ListItem
							primaryText={<FormattedMessage {...messages['basic']}/>}
							leftIcon={<Folder />}
							primaryTogglesNestedList={true}
							nestedItems={[
							  <ListItem value={'/foo'}  primaryText={<FormattedMessage {...messages['/foo']}/>} leftIcon={<ActionGrade />} />,
							  <ListItem value={'/bar'}  primaryText={<FormattedMessage {...messages['/bar']}/>} leftIcon={<ActionGrade />} />,
							]}
						  />
					<ListItem
							primaryText={<FormattedMessage {...messages['advanced']}/>}
							leftIcon={<Folder />}
							primaryTogglesNestedList={true}
							nestedItems={[
								<ListItem value={'/counter'} primaryText={<FormattedMessage {...messages['/counter']}/>} leftIcon={<ActionGrade />} />,
								<ListItem value={'/todo'}  primaryText={<FormattedMessage {...messages['/todo']}/>} leftIcon={<ActionGrade />} />
								
							]}
						  />
						  
						  {restricted}  
							
								
						<Divider />
						<Subheader>{<FormattedMessage {...messages['/settings']}/>}</Subheader>	
						<ListItem value={'/settings'} primaryText={<FormattedMessage {...messages['/settings']}/>} leftIcon={<ActionSettings />} />
						
				</SelectableList>
				
						
			</div>
    );

  }
}

AppNavDrawerContent.propTypes = {
  auth: PropTypes.object.isRequired,
  drawerProps: PropTypes.object.isRequired,
  toggleDrawerOpen: PropTypes.func.isRequired,
  setDrawerOpen: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
  setAppBarTitle: PropTypes.func.isRequired,
  browser: PropTypes.object.isRequired,
  to: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

AppNavDrawerContent.contextTypes = {
  router: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const { auth, appNavDrawer, responsiveStateReducer } = state;
  return {
	drawerProps: appNavDrawer,
	browser: responsiveStateReducer,
	auth: auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawerOpen: () => {
      dispatch(toggleDrawerOpen())
    },
	setDrawerOpen: (open) => {
      dispatch(setDrawerOpen(open))
    },
	to: (path)=>{
		dispatch(push(path))
	},
	setSelectedIndex:(index)=>{
		dispatch(setSelectedIndex(index));
	},
	setAppBarTitle:(title)=>{
		dispatch(setAppBarTitle(title));
	}


  }
};

export default connect(
  mapStateToProps,mapDispatchToProps
)(AppNavDrawerContent);
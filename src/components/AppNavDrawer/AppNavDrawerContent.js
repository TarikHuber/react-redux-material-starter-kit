import React, { Component, PropTypes } from 'react';
import config from '../../config';
import Paper from 'material-ui/Paper';
import {List, Subheader, MakeSelectable, Drawer , ListItem} from 'material-ui';
import ActionSettings  from 'material-ui/svg-icons/action/settings';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Folder from 'material-ui/svg-icons/file/folder';

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


class AppNavDrawerContent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {messages, docked,  auth, setAppBarTitle, setSelectedIndex, to, setDrawerOpen,navigation, toggleDrawerOpen, browser, location, updateTitle } = this.props;


		const index=this.props.location?this.props.location.pathname:'/';


		function handleClick(path){

			if(navigation.open){
				setDrawerOpen(false);
			}

			to(path);
			updateTitle(config.app.name+' - '+(messages[path]||path));
		}

		let drawerP = {...navigation,
			docked: docked,
			open:docked?docked:navigation.open,
			onRequestChange:() => toggleDrawerOpen(),
		};

		let SelectableList = MakeSelectable(List);

		return (
			<div>

				<SelectableList
					value={index}
					onChange={(event, itemValue)=>handleClick(itemValue)}>

					<ListItem
						value={'dashboard'}
						primaryText={messages.dashboard||'dashboard'}
						leftIcon={<ActionDashboard />} />
					<Divider />
					<Subheader>{messages.public_examples||'public_examples'}</Subheader>
					<ListItem
						primaryText={messages.basic||'basic'}
						leftIcon={<Folder />}
						primaryTogglesNestedList={true}
						nestedItems={[
							<ListItem
								value={'foo'}
								primaryText={messages.foo||'foo'}
								leftIcon={<ActionGrade />} />,
							<ListItem
								value={'props'}
								primaryText={messages.props||'props'}
								leftIcon={<ActionGrade />} />,
							<ListItem
								value={'propsanddispatch'}
								primaryText={messages.propsanddispatch||'propsanddispatch'}
								leftIcon={<ActionGrade />} />,
						]}
						/>
					<ListItem
						primaryText={messages.advanced}
						leftIcon={<Folder />}
						primaryTogglesNestedList={true}
						nestedItems={[
							<ListItem
								value={'counter'}
								primaryText={messages.counter||'counter'}
								leftIcon={<ActionGrade />} />,
							<ListItem
								value={'todo'}
								primaryText={messages.todo||'todo'}
								leftIcon={<ActionGrade />} />

						]}
						/>


					{auth.apiToken!==undefined &&
						<div>
							<Divider />
							<Subheader>{messages.restricted_examples||'restricted_examples'}</Subheader>
							<SelectableList
								value={index}
								onChange={(event, itemValue)=>handleClick(itemValue)}>
								<ListItem
									primaryText={messages.responsive||'responsive'}
									leftIcon={<Folder />}
									primaryTogglesNestedList={true}
									nestedItems={[
										<ListItem value={'responsive'}
											primaryText={messages.responsive||'responsive'}
											rightIcon={<ActionInfo/>} />

									]}
									/>
							</SelectableList>

							<SelectableList value={index} onChange={(event, itemValue)=>handleClick(itemValue)}>
								<ListItem
									primaryText={messages.rest_api||'rest_api'}
									leftIcon={<Folder />}
									primaryTogglesNestedList={true}
									nestedItems={[
										<ListItem value={'gitusers'}
											primaryText={messages.git_users||'git_users'}
											rightIcon={<ActionInfo/>}

											/>,
										<ListItem value={'repos'}
											primaryText={messages.repos||'repos'}
											rightIcon={<ActionInfo/>}

											/>

									]}
									/>
							</SelectableList>
						</div>
					}
					<Divider />
					<Subheader>{messages.settings||'settings'}</Subheader>
					<ListItem value={'settings'} primaryText={messages.settings||'settings'} leftIcon={<ActionSettings />} />

				</SelectableList>
			</div>
		);

	}
}

AppNavDrawerContent.propTypes = {
	docked: PropTypes.bool,
	messages: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	navigation: PropTypes.object.isRequired,
	toggleDrawerOpen: PropTypes.func.isRequired,
	setDrawerOpen: PropTypes.func.isRequired,
	updateTitle: PropTypes.func.isRequired,
	browser: PropTypes.object.isRequired,
	to: PropTypes.func.isRequired,
	location: PropTypes.object.isRequired,
};


export default (AppNavDrawerContent);

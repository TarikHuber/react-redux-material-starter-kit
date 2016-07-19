import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { FormattedHTMLMessage } from 'react-intl';
import find from 'lodash/find';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import Style  from 'material-ui/svg-icons/image/style';
import ActionLanguage  from 'material-ui/svg-icons/action/language';
import ActionChromeReaderMode  from 'material-ui/svg-icons/action/chrome-reader-mode';
import Activity from '../../components/Activity/Activity';
import { setSelectedIndex, setResponsive} from '../../actions/appNavDrawer';
import {setThemeDialogOpen} from '../../actions/appStyle';
import {setIntlDialogOpen} from '../../actions/intl';
import languages from '../../translations/languages';
import themes from '../../themes/themes';
import ThemeDialog from '../../containers/ThemeDialog/ThemeDialog';
import IntlDialog from '../../containers/IntlDialog/IntlDialog';
import Toggle from 'material-ui/Toggle';
                  
class MainSettings extends Component{
	  
	constructor(props) {
		super(props);
	}; 

	render(){
 
		const { intl , appStyle, setThemeDialogOpen, setIntlDialogOpen, setResponsive,appNavDrawer} = this.props;
		const currentLanguage = find(languages, { key: intl.locale });


		return (  

			<Activity title={intl.messages.settings} nav_index='/settings' >
				<div>
					<List>
						<Subheader>{intl.messages.general}</Subheader>
						<ListItem
							leftIcon={<Style />}
							primaryText={intl.messages.theme}
							secondaryText={intl.messages[appStyle.theme.id]}
							onClick={()=>{setThemeDialogOpen(true)}}
						/>
						<ThemeDialog/>
						<Divider inset={true} />
						<ListItem
							leftIcon={<ActionLanguage />}
							primaryText={intl.messages.language}
							secondaryText={intl.messages[currentLanguage.id]}
							onClick={()=>{setIntlDialogOpen(true)}}
						/>
						<IntlDialog/>
					</List> 
					<Divider />
					<List>
						<Subheader>{intl.messages.navigation||'navigation'}</Subheader>
						<ListItem
							leftIcon={<ActionChromeReaderMode />}
							primaryTogglesNestedList={true}
							primaryText={intl.messages.responsive||'responsive'} 
							rightToggle={<Toggle 
											toggled={appNavDrawer.responsive} 
											onToggle={()=>{setResponsive(!appNavDrawer.responsive)}}
										/>} 
						/>
					</List>
					<Divider />
				</div>
			</Activity>

		);
	}

};

MainSettings.propTypes = {
	intl: PropTypes.object.isRequired,
	appStyle: PropTypes.object.isRequired,
	setAppBarTitle: PropTypes.func.isRequired,
	setSelectedIndex: PropTypes.func.isRequired,
	setThemeDialogOpen: PropTypes.func.isRequired,
	setIntlDialogOpen: PropTypes.func.isRequired,
	setResponsive: PropTypes.func.isRequired,
	appNavDrawer: PropTypes.object.isRequired,
}


function mapStateToProps(state) {

	 const {intl, appStyle, appNavDrawer} = state;

	 return {
			intl:intl,
			appStyle:appStyle,
			appNavDrawer:appNavDrawer,
		 };

}



const mapDispatchToProps = (dispatch) => {
  return {
	setAppBarTitle:(title) => {
		dispatch(setAppBarTitle(title));
	},
	setSelectedIndex:(index) => {
		dispatch(setSelectedIndex(index));
	},
	setThemeDialogOpen:(open) => {
		dispatch(setThemeDialogOpen(open));	
	},
	setIntlDialogOpen:(open) => {
		dispatch(setIntlDialogOpen(open));	
	},
	setResponsive:(responsive) =>{
		dispatch(setResponsive(responsive));
	}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainSettings);
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import find from 'lodash/find';
import { addTodo } from '../../actions/todo'
import {setThemeDialogOpen, setAppTheme} from '../../actions/appStyle';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import themes from '../../themes/themes';


const styles = {
  body: {
    margin: 10,
  },
  radioButton: {
    marginBottom: 16,
  },
};

class ThemeDialog extends Component {
  constructor(props) {
    super(props)
	
  };
  

  render(){
	const { intl, appStyle, setThemeDialogOpen, addTodo, setErrorText, setAppTheme } = this.props;
  
	function handleClose(){
		setThemeDialogOpen(false);
	};
	
	function handleChange(object,value){
		
		let theme=find(themes, { id: value});
		setAppTheme(theme);
		setThemeDialogOpen(false);
	};
	
	return (
		<div>
			<Dialog
				title={intl.messages.select_theme}
				
				modal={false}
				open={appStyle.dialogOpen}
				onRequestClose={handleClose}
				autoScrollBodyContent={true}
			>	
				<div style={styles.body}>
					<RadioButtonGroup
						name='theme'
						valueSelected={appStyle.theme.id}
						onChange={(object, value)=>handleChange(object, value)}
					>
					{themes.map(theme =>
							<RadioButton  
								value={theme.id} 
								key={theme.id}
								label={intl.messages[theme.id]} 
								style={styles.radioButton}
							/>)
					}
					</RadioButtonGroup>
				</div>
			</Dialog>
			
			
		</div>
	)
  }
}


ThemeDialog.propTypes = {
	intl: PropTypes.object.isRequired,
	appStyle: PropTypes.object.isRequired,
	setThemeDialogOpen: PropTypes.func.isRequired,
	addTodo: PropTypes.func.isRequired,
	setErrorText: PropTypes.func.isRequired,
	setAppTheme: PropTypes.func.isRequired,
}

function mapStateToProps(state) {

	 const { intl, appStyle} = state;

	 return {
			intl:intl,
			appStyle:appStyle,
		 };

}



const mapDispatchToProps = (dispatch) => {
  return {
	setThemeDialogOpen:(index)=>{
		dispatch(setThemeDialogOpen(index));
	},
	addTodo:(text)=>{
		dispatch(addTodo(text));
	},
	setErrorText:(text)=>{
		dispatch(setErrorText(text));
	},
	setAppTheme:(theme)=>{
		dispatch(setAppTheme(theme));
	},

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ThemeDialog);
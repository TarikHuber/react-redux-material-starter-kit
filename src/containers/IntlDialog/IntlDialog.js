import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import find from 'lodash/find';
import { addTodo } from '../../actions/todo'
import {setIntlDialogOpen, updateIntl} from '../../actions/intl';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import languages from '../../translations/languages';


const styles = {
  body: {
    margin: 10,
  },
  radioButton: {
    marginBottom: 16,
  },
};

class IntlDialog extends Component {
  constructor(props) {
    super(props)
	
  };
  

  render(){
	const { intl, appStyle, setIntlDialogOpen, addTodo, setErrorText, updateIntl } = this.props;
  
	function handleClose(){
		setIntlDialogOpen(false);
	};
	
	function handleChange(object,value){
		
		let language=find(languages, { id: value});
		updateIntl(value);
		setIntlDialogOpen(false);
	};
	
	const currentLanguage = find(languages, { key: intl.locale });
	
	return (
		<div>
			<Dialog
				title={intl.messages.select_language||'language'}
				
				modal={false}
				open={intl.dialogOpen}
				onRequestClose={handleClose}
				autoScrollBodyContent={true}
			>	
				<div style={styles.body}>
					<RadioButtonGroup
						name='languages'
						valueSelected={currentLanguage.key}
						onChange={(object, value)=>handleChange(object, value)}
					>
					{languages.map(language =>
							<RadioButton  
								value={language.key} 
								key={language.key}
								label={intl.messages[language.id]} 
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


IntlDialog.propTypes = {
	intl: PropTypes.object.isRequired,
	appStyle: PropTypes.object.isRequired,
	setIntlDialogOpen: PropTypes.func.isRequired,
	addTodo: PropTypes.func.isRequired,
	setErrorText: PropTypes.func.isRequired,
	updateIntl: PropTypes.func.isRequired,
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
	setIntlDialogOpen:(index)=>{
		dispatch(setIntlDialogOpen(index));
	},
	addTodo:(text)=>{
		dispatch(addTodo(text));
	},
	setErrorText:(text)=>{
		dispatch(setErrorText(text));
	},
	updateIntl:(locale)=>{
		dispatch(updateIntl(locale));
	},


  }
}

export default connect(mapStateToProps,mapDispatchToProps)(IntlDialog);
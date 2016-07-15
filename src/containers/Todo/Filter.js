import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/todo'
import {setTodoDialogOpen, setErrorText} from '../../actions/todoDialog';
import { setVisibilityFilter } from '../../actions/todo';
import {  FormattedNumber, FormattedMessage} from 'react-intl';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { messages } from './Todo.i18n';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';

class Filter extends Component {
  constructor(props) {
    super(props)
	 
  };
  

  render(){
	const {visibilityFilter, todoDialog, setVisibilityFilter, addTodo, setErrorText } = this.props;
  
 function handleChangeSingle (event, value) {
    setVisibilityFilter(value);
  };

   
  return (
    <IconMenu
	  iconButtonElement={<IconButton><ContentFilter color={'white'}/></IconButton>}
	  onChange={handleChangeSingle}
	  value={visibilityFilter}
	  multiple={false}
	>
	  <MenuItem value="SHOW_ALL" primaryText={<FormattedMessage {...messages.filter.all}/>} />
	  <MenuItem value="SHOW_COMPLETED" primaryText={<FormattedMessage {...messages.filter.completed}/>} />
	  <MenuItem value="SHOW_ACTIVE" primaryText={<FormattedMessage {...messages.filter.active}/>} />
	</IconMenu>
  )
  }
}


Filter.propTypes = {

  todoDialog: PropTypes.object.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  setErrorText: PropTypes.func.isRequired,
  visibilityFilter:PropTypes.string.isRequired,
}

function mapStateToProps(state) {

	 const { visibilityFilter, todoDialog} = state;

	 return {
			todoDialog:todoDialog,
			visibilityFilter: visibilityFilter,
		 };

}



const mapDispatchToProps = (dispatch) => {
  return {
	setVisibilityFilter:(filter)=>{
		dispatch(setVisibilityFilter(filter));
	},
	addTodo:(text)=>{
		dispatch(addTodo(text));
	},
	setErrorText:(text)=>{
		dispatch(setErrorText(text));
	},
	
	
	

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Filter);
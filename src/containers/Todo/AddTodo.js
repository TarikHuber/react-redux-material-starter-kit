import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/todo'
import {setTodoDialogOpen, setErrorText} from '../../actions/todoDialog';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class AddTodo extends Component {
  constructor(props) {
    super(props)
	
  };
  

  render(){
	const { todoDialog, setTodoDialogOpen, addTodo, setErrorText } = this.props;
  
  
    let input;
   
	function handleOpen(){
		setTodoDialogOpen(true);
	};
	
	function handleClose(){
		setErrorText(undefined);
		setTodoDialogOpen(false);
	};
	
	function handleSubmit(todoText){
		
		
		if(!todoText.input.value.trim()){
			
			setErrorText("Text is requred!");
			return
		}

		addTodo(todoText.input.value);
		handleClose();
	};
   
   const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={()=>handleSubmit(this.refs.todoText)}
      />,
    ];
   
  return (
    <div>
      
	  <Dialog
          title="Add Todo"
          actions={actions}
          modal={false}
          open={todoDialog.open}
		  onRequestClose={handleClose}
        >
		
		
		<form onSubmit={e => {
        e.preventDefault()
		
		handleSubmit(this.refs.todoText)

      }}>
	   
		<TextField 
			ref="todoText"
			hintText="Todo text"
			errorText={todoDialog.errorText}
			floatingLabelText="Enter a Todo"
			fullWidth={true}
		  />
	  
	  
	  
       
      </form>
		

        </Dialog>
	 
		
    </div>
  )
  }
}


AddTodo.propTypes = {

  todoDialog: PropTypes.object.isRequired,
  setTodoDialogOpen: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  setErrorText: PropTypes.func.isRequired,
}

function mapStateToProps(state) {

	 const { todoDialog} = state;

	 return {
			todoDialog:todoDialog,
		 };

}



const mapDispatchToProps = (dispatch) => {
  return {
	setTodoDialogOpen:(index)=>{
		dispatch(setTodoDialogOpen(index));
	},
	addTodo:(text)=>{
		dispatch(addTodo(text));
	},
	setErrorText:(text)=>{
		dispatch(setErrorText(text));
	},
	
	
	

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTodo);
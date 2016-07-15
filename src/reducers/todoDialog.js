import{SET_TODO_DIALOG_OPEN,
	SET_ERROR_TEXT} from '../actions/todoDialog';

const initialState = {
	  open:false,
	  errorText:undefined,

}

const todoDialog = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODO_DIALOG_OPEN:
		return {
			...state,
			open: action.open,
		  };
		  
	 case SET_ERROR_TEXT:
		return {
			...state,
			errorText: action.text,
		  };

    default:
      return state;
  }
}

export default todoDialog;
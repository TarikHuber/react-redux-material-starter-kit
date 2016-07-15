export const SET_TODO_DIALOG_OPEN = 'SET_TODO_DIALOG_OPEN';
export const SET_ERROR_TEXT = 'SET_ERROR_TEXT';

export function setTodoDialogOpen(open) {
  return {
    type: SET_TODO_DIALOG_OPEN,
	open: open,	
  };
}


export function setErrorText(text) {
  return {
    type: SET_ERROR_TEXT,
	text: text,	
  };
}


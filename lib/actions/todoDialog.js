'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTodoDialogOpen = setTodoDialogOpen;
exports.setErrorText = setErrorText;
var SET_TODO_DIALOG_OPEN = exports.SET_TODO_DIALOG_OPEN = 'SET_TODO_DIALOG_OPEN';
var SET_ERROR_TEXT = exports.SET_ERROR_TEXT = 'SET_ERROR_TEXT';

function setTodoDialogOpen(open) {
  return {
    type: SET_TODO_DIALOG_OPEN,
    open: open
  };
}

function setErrorText(text) {
  return {
    type: SET_ERROR_TEXT,
    text: text
  };
}
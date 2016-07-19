'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSignInDialogOpen = setSignInDialogOpen;
exports.setSignInTextErrors = setSignInTextErrors;
var SET_SIGNIN_DIALOG_OPEN = exports.SET_SIGNIN_DIALOG_OPEN = 'SET_SIGNIN_DIALOG_OPEN';
var SET_SIGNIN_TEXT_ERRORS = exports.SET_SIGNIN_TEXT_ERRORS = 'SET_SIGNIN_TEXT_ERRORS';

function setSignInDialogOpen(open) {
  return {
    type: SET_SIGNIN_DIALOG_OPEN,
    open: open
  };
}

function setSignInTextErrors(errors) {
  return {
    type: SET_SIGNIN_TEXT_ERRORS,
    errors: errors

  };
}
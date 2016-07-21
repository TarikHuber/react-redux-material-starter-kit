export const SET_SIGNIN_DIALOG_OPEN = 'SET_SIGNIN_DIALOG_OPEN';
export const SET_SIGNIN_TEXT_ERRORS = 'SET_SIGNIN_TEXT_ERRORS';

export function setSignInDialogOpen(open) {
  return {
    type: SET_SIGNIN_DIALOG_OPEN,
    open: open,
  };
}


export function setSignInTextErrors(errors) {
  return {
    type: SET_SIGNIN_TEXT_ERRORS,
    errors: errors,

  };
}

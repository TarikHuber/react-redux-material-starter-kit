export const UPDATE_INTL = 'UPDATE_INTL';
export const SET_INTL_DIALOG_OPEN = 'SET_INTL_DIALOG_OPEN';

export function updateIntl(locale) {
  return {
    type: 'UPDATE_INTL',	
	locale: locale
  };
}

export function setIntlDialogOpen(open) {
  return {
    type: SET_INTL_DIALOG_OPEN,
	open: open,	
  };
}

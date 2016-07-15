export const SET_APP_THEME = 'SET_APP_THEME';
export const SET_THEME_DIALOG_OPEN = 'SET_THEME_DIALOG_OPEN';

export function setAppTheme(theme) {
  return {
    type: SET_APP_THEME,
	theme: theme,	
  };
}


export function setThemeDialogOpen(open) {
  return {
    type: SET_THEME_DIALOG_OPEN,
	open: open,	
  };
}

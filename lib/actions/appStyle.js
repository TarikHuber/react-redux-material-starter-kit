'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAppTheme = setAppTheme;
exports.setThemeDialogOpen = setThemeDialogOpen;
var SET_APP_THEME = exports.SET_APP_THEME = 'SET_APP_THEME';
var SET_THEME_DIALOG_OPEN = exports.SET_THEME_DIALOG_OPEN = 'SET_THEME_DIALOG_OPEN';

function setAppTheme(theme) {
  return {
    type: SET_APP_THEME,
    theme: theme
  };
}

function setThemeDialogOpen(open) {
  return {
    type: SET_THEME_DIALOG_OPEN,
    open: open
  };
}
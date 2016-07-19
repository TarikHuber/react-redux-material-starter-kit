'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateIntl = updateIntl;
exports.setIntlDialogOpen = setIntlDialogOpen;
var UPDATE_INTL = exports.UPDATE_INTL = 'UPDATE_INTL';
var SET_INTL_DIALOG_OPEN = exports.SET_INTL_DIALOG_OPEN = 'SET_INTL_DIALOG_OPEN';

function updateIntl(locale) {
  return {
    type: 'UPDATE_INTL',
    locale: locale
  };
}

function setIntlDialogOpen(open) {
  return {
    type: SET_INTL_DIALOG_OPEN,
    open: open
  };
}
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _todoDialog = require('../actions/todoDialog');

var initialState = {
	open: false,
	errorText: undefined

};

var todoDialog = function todoDialog() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	var action = arguments[1];

	switch (action.type) {
		case _todoDialog.SET_TODO_DIALOG_OPEN:
			return _extends({}, state, {
				open: action.open
			});

		case _todoDialog.SET_ERROR_TEXT:
			return _extends({}, state, {
				errorText: action.text
			});

		default:
			return state;
	}
};

exports.default = todoDialog;
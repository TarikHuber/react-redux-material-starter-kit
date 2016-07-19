'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _signIn = require('../actions/signIn');

var initialState = {
	signInDialogOpen: false,
	errors: {}
};

var singIn = function singIn() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	var action = arguments[1];

	switch (action.type) {

		case _signIn.SET_SIGNIN_DIALOG_OPEN:
			return _extends({}, state, {
				signInDialogOpen: action.open
			});

		case _signIn.SET_SIGNIN_TEXT_ERRORS:

			return _extends({}, state, {
				errors: action.errors
			});

		default:
			return state;
	}
};

exports.default = singIn;
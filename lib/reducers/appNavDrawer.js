'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _appNavDrawer = require('../actions/appNavDrawer');

var initialState = {
	disableSwipeToOpen: false,
	docked: true,
	responsive: true,
	open: false,
	openSecondary: false,
	zDepth: 2,
	swipeAreaWidth: 30
};

var appNavDrawer = function appNavDrawer() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	var action = arguments[1];

	switch (action.type) {
		case _appNavDrawer.TOGGLE_DRAWER_OPEN:
			return _extends({}, state, {
				open: !state.open
			});
		case _appNavDrawer.TOGGLE_DRAWER_DOCK:
			return _extends({}, state, {
				docked: !state.docked
			});

		case _appNavDrawer.SET_DRAWER_OPEN:
			return _extends({}, state, {
				open: action.open
			});

		case _appNavDrawer.SET_RESPONSIVE:
			return _extends({}, state, {
				responsive: action.responsive
			});

		default:
			return state;
	}
};

exports.default = appNavDrawer;
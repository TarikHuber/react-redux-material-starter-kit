'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _appStyle = require('../actions/appStyle');

var _find = require('lodash/find');

var _find2 = _interopRequireDefault(_find);

var _themes = require('../themes/themes');

var _themes2 = _interopRequireDefault(_themes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_id = 'custom1';

var initialState = {
	theme: (0, _find2.default)(_themes2.default, { id: default_id }),
	dialogOpen: false
};

var appStyle = function appStyle() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	var action = arguments[1];

	switch (action.type) {
		case _appStyle.SET_APP_THEME:

			return _extends({}, state, {
				theme: action.theme
			});

		case _appStyle.SET_THEME_DIALOG_OPEN:

			return _extends({}, state, {
				dialogOpen: action.open
			});

		default:
			return state;
	}
};

exports.default = appStyle;
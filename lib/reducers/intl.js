'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _intl = require('../actions/intl');

var _find = require('lodash/find');

var _find2 = _interopRequireDefault(_find);

var _languages = require('../translations/languages');

var _languages2 = _interopRequireDefault(_languages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_language = (0, _find2.default)(_languages2.default, { key: 'en' });

var initialState = {
	locale: default_language.key,
	messages: default_language.messages,
	dialogOpen: false
};

var intl = function intl() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	var action = arguments[1];

	switch (action.type) {
		case _intl.UPDATE_INTL:

			var language = (0, _find2.default)(_languages2.default, { key: action.locale });

			return _extends({}, state, {
				locale: action.locale,
				messages: language.messages
			});

		case _intl.SET_INTL_DIALOG_OPEN:
			return _extends({}, state, {
				dialogOpen: action.open
			});

		default:
			return state;
	}
};

exports.default = intl;
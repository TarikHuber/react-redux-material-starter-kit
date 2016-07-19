'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dashboard = require('../actions/dashboard');

var initialState = {
  layout: undefined
};

var appBar = function appBar() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _dashboard.ON_LAYOUT_CHANGE:
      return _extends({}, state, {
        layout: action.layout
      });

    default:
      return state;
  }
};

exports.default = appBar;
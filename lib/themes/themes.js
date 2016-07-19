'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _darkBaseTheme = require('material-ui/styles/baseThemes/darkBaseTheme');

var _darkBaseTheme2 = _interopRequireDefault(_darkBaseTheme);

var _lightBaseTheme = require('material-ui/styles/baseThemes/lightBaseTheme');

var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);

var _custom = require('./custom1');

var _custom2 = _interopRequireDefault(_custom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var themes = [{
  id: 'light',
  source: _lightBaseTheme2.default
}, {
  id: 'dark',
  source: _darkBaseTheme2.default
}, {
  id: 'custom1',
  source: _custom2.default
}];

exports.default = themes;
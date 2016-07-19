'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _en = require('./en');

var _en2 = _interopRequireDefault(_en);

var _de = require('./de');

var _de2 = _interopRequireDefault(_de);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var languages = [{
   key: 'en',
   id: 'lang.en',
   defaultMessage: 'English',
   messages: _en2.default
}, {
   key: 'de',
   id: 'lang.de',
   defaultMessage: 'German',
   messages: _de2.default
}];

exports.default = languages;
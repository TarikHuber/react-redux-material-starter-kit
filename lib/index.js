'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Root = require('./containers/Root/Root.js');

var _Root2 = _interopRequireDefault(_Root);

var _configureStore = require('./store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

require('../static/main.css');

require('../node_modules/react-grid-layout/css/styles.css');

require('../node_modules/react-resizable/css/styles.css');

require('../static/favicon.ico');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var store = (0, _configureStore2.default)();

(0, _reactDom.render)(_react2.default.createElement(_Root2.default, { store: store, history: history }), document.getElementById('root'));
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _NotFound = require('./containers/Misc/NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

var _RestrictPage = require('./containers/Misc/RestrictPage');

var _RestrictPage2 = _interopRequireDefault(_RestrictPage);

var _App = require('./containers/App/App');

var _App2 = _interopRequireDefault(_App);

var _SignIn = require('./containers/Auth/SignIn');

var _SignIn2 = _interopRequireDefault(_SignIn);

var _Dashboard = require('./containers/Dashboard/Dashboard');

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _Foo = require('./components/BasicExamples/Foo');

var _Foo2 = _interopRequireDefault(_Foo);

var _PropsExample = require('./components/BasicExamples/PropsExample');

var _PropsExample2 = _interopRequireDefault(_PropsExample);

var _PropsAndDispatchExample = require('./components/BasicExamples/PropsAndDispatchExample');

var _PropsAndDispatchExample2 = _interopRequireDefault(_PropsAndDispatchExample);

var _Counter = require('./containers/Counter/Counter');

var _Counter2 = _interopRequireDefault(_Counter);

var _Responsive = require('./containers/Responsive/Responsive');

var _Responsive2 = _interopRequireDefault(_Responsive);

var _MainSettings = require('./containers/Settings/MainSettings');

var _MainSettings2 = _interopRequireDefault(_MainSettings);

var _GitUsers = require('./containers/GitUsers/GitUsers');

var _GitUsers2 = _interopRequireDefault(_GitUsers);

var _Repos = require('./containers/Repos/Repos');

var _Repos2 = _interopRequireDefault(_Repos);

var _Todo = require('./containers/Todo/Todo');

var _Todo2 = _interopRequireDefault(_Todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
	_reactRouter.Route,
	{ path: '/', component: _App2.default },
	_react2.default.createElement(_reactRouter.IndexRedirect, { to: 'dashboard' }),
	_react2.default.createElement(_reactRouter.Route, { path: 'app', component: _Dashboard2.default }),
	_react2.default.createElement(_reactRouter.Redirect, { from: 'app', to: 'dashboard' }),
	_react2.default.createElement(_reactRouter.Route, { path: 'signin', component: _SignIn2.default }),
	_react2.default.createElement(_reactRouter.Route, { path: 'dashboard', component: _Dashboard2.default }),
	_react2.default.createElement(_reactRouter.Route, { path: 'foo', component: _Foo2.default }),
	_react2.default.createElement(_reactRouter.Route, { path: 'props', component: _PropsExample2.default }),
	_react2.default.createElement(_reactRouter.Route, { path: 'propsanddispatch', component: _PropsAndDispatchExample2.default }),
	_react2.default.createElement(_reactRouter.Route, { path: 'todo', component: _Todo2.default }),
	_react2.default.createElement(_reactRouter.Route, { path: 'counter', component: _Counter2.default }),
	_react2.default.createElement(
		_reactRouter.Route,
		{ component: _RestrictPage2.default },
		_react2.default.createElement(_reactRouter.Route, { path: 'responsive', component: _Responsive2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'gitusers', component: _GitUsers2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'repos', component: _Repos2.default })
	),
	_react2.default.createElement(_reactRouter.Route, { path: 'settings', component: _MainSettings2.default }),
	_react2.default.createElement(_reactRouter.Route, { path: '*', component: _NotFound2.default })
);
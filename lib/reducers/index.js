'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxTitle = require('redux-title');

var _todos = require('./todos');

var _todos2 = _interopRequireDefault(_todos);

var _visibilityFilter = require('./visibilityFilter');

var _visibilityFilter2 = _interopRequireDefault(_visibilityFilter);

var _counter = require('./counter');

var _counter2 = _interopRequireDefault(_counter);

var _intl = require('./intl');

var _intl2 = _interopRequireDefault(_intl);

var _appNavDrawer = require('./appNavDrawer');

var _appNavDrawer2 = _interopRequireDefault(_appNavDrawer);

var _appStyle = require('./appStyle');

var _appStyle2 = _interopRequireDefault(_appStyle);

var _dashboard = require('./dashboard');

var _dashboard2 = _interopRequireDefault(_dashboard);

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _signIn = require('./signIn');

var _signIn2 = _interopRequireDefault(_signIn);

var _todoDialog = require('./todoDialog');

var _todoDialog2 = _interopRequireDefault(_todoDialog);

var _gitUsers = require('./gitUsers');

var _repos = require('./repos');

var _reactRouterRedux = require('react-router-redux');

var _reduxResponsive = require('redux-responsive');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
  todos: _todos2.default,
  title: _reduxTitle.titleReducer,
  visibilityFilter: _visibilityFilter2.default,
  counter: _counter2.default,
  responsiveStateReducer: _reduxResponsive.responsiveStateReducer,
  intl: _intl2.default,
  appNavDrawer: _appNavDrawer2.default,
  appStyle: _appStyle2.default,
  todoDialog: _todoDialog2.default,
  dashboard: _dashboard2.default,
  usersByPage: _gitUsers.usersByPage,
  selectedUsersPage: _gitUsers.selectedUsersPage,
  usersQuery: _gitUsers.usersQuery,
  selectedReposPage: _repos.selectedReposPage,
  reposByPage: _repos.reposByPage,
  reposQuery: _repos.reposQuery,
  auth: _auth2.default,
  user: _user2.default,
  signIn: _signIn2.default,
  routing: _reactRouterRedux.routerReducer

});

exports.default = reducers;
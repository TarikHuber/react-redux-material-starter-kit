'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _index = require('../reducers/index');

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxPersist = require('redux-persist');

var _reduxResponsive = require('redux-responsive');

var _en = require('../translations/en');

var _en2 = _interopRequireDefault(_en);

var _reactRouter = require('react-router');

var _reduxTitle = require('redux-title');

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _DevTools = require('../containers/DevTools/DevTools');

var _DevTools2 = _interopRequireDefault(_DevTools);

var _SignIn = require('../containers/Auth/SignIn');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore() {
  var store = void 0;

  var initState = {
    title: _config2.default.app.name

  };

  var middlewares = [_reduxThunk2.default, (0, _reactRouterRedux.routerMiddleware)(_reactRouter.browserHistory)];

  if (module.hot) {
    store = (0, _redux.createStore)(_reducers2.default, initState, (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middlewares), (0, _reduxPersist.autoRehydrate)(), _reduxResponsive.responsiveStoreEnhancer, _DevTools2.default.instrument(), window.devToolsExtension ? window.devToolsExtension() : function (f) {
      return f;
    }));
  } else {
    store = (0, _redux.createStore)(_reducers2.default, initState, (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middlewares), (0, _reduxPersist.autoRehydrate)(), _reduxResponsive.responsiveStoreEnhancer, function (f) {
      return f;
    }));
  }

  (0, _reduxTitle.syncReduxAndTitle)(store);

  try {
    (0, _reduxPersist.persistStore)(store, { whitelist: ['auth'] }, function () {
      (0, _SignIn.handleRehidration)();
    });
  } catch (e) {}

  return store;
}
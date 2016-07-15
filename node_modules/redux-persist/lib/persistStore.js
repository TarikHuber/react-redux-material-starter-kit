'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = persistStore;

var _constants = require('./constants');

var constants = _interopRequireWildcard(_constants);

var _getStoredState = require('./getStoredState');

var _getStoredState2 = _interopRequireDefault(_getStoredState);

var _createPersistor = require('./createPersistor');

var _createPersistor2 = _interopRequireDefault(_createPersistor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var genericSetImmediate = typeof setImmediate === 'undefined' ? global.setImmediate : setImmediate;

function persistStore(store) {
  var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var onComplete = arguments[2];

  // defaults
  var shouldRestore = !config.skipRestore;
  if (process.env.NODE_ENV !== 'production' && config.skipRestore) console.warn('redux-persist: config.skipRestore has been deprecated. If you want to skip restoration use `createPersistor` instead');

  // create and pause persistor
  var persistor = (0, _createPersistor2.default)(store, config);
  persistor.pause();

  // restore
  if (shouldRestore) {
    genericSetImmediate(function () {
      (0, _getStoredState2.default)(_extends({}, config, { purgeMode: persistor._getPurgeMode() }), function (err, restoredState) {
        if (restoredState) store.dispatch(rehydrateAction(restoredState));
        if (err) store.dispatch(rehydrateErrorAction(err));
        complete(err, restoredState);
      });
    });
  } else genericSetImmediate(complete);

  function complete(err, restoredState) {
    persistor.resume();
    onComplete && onComplete(err, restoredState);
  }

  return persistor;
}

function rehydrateAction(data) {
  return {
    type: constants.REHYDRATE,
    payload: data
  };
}

function rehydrateErrorAction(err) {
  return {
    type: constants.REHYDRATE_ERROR,
    payload: err
  };
}
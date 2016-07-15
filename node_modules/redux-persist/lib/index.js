'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storages = exports.persistStore = exports.getStoredState = exports.createTransform = exports.createPersistor = exports.autoRehydrate = undefined;

var _autoRehydrate = require('./autoRehydrate');

var _autoRehydrate2 = _interopRequireDefault(_autoRehydrate);

var _createPersistor = require('./createPersistor');

var _createPersistor2 = _interopRequireDefault(_createPersistor);

var _createTransform = require('./createTransform');

var _createTransform2 = _interopRequireDefault(_createTransform);

var _getStoredState = require('./getStoredState');

var _getStoredState2 = _interopRequireDefault(_getStoredState);

var _persistStore = require('./persistStore');

var _persistStore2 = _interopRequireDefault(_persistStore);

var _asyncLocalStorage = require('./defaults/asyncLocalStorage');

var _asyncLocalStorage2 = _interopRequireDefault(_asyncLocalStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storages = {
  asyncLocalStorage: (0, _asyncLocalStorage2.default)('local'),
  asyncSessionStorage: (0, _asyncLocalStorage2.default)('session')
};

exports.autoRehydrate = _autoRehydrate2.default;
exports.createPersistor = _createPersistor2.default;
exports.createTransform = _createTransform2.default;
exports.getStoredState = _getStoredState2.default;
exports.persistStore = _persistStore2.default;
exports.storages = storages;
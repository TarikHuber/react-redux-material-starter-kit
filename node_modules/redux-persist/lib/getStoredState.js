'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _forEach2 = require('lodash/forEach');

var _forEach3 = _interopRequireDefault(_forEach2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = getStoredState;

var _constants = require('./constants');

var constants = _interopRequireWildcard(_constants);

var _asyncLocalStorage = require('./defaults/asyncLocalStorage');

var _asyncLocalStorage2 = _interopRequireDefault(_asyncLocalStorage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStoredState(config, onComplete) {
  var storage = config.storage || (0, _asyncLocalStorage2.default)('local');
  var deserialize = config.deserialize || defaultDeserialize;
  var blacklist = config.blacklist || [];
  var whitelist = config.whitelist || false;
  var transforms = config.transforms || [];
  var purgeMode = config.purgeMode || false;

  // fallback getAllKeys to `keys` if present (LocalForage compatability)
  if (storage.keys && !storage.getAllKeys) storage = _extends({}, storage, { getAllKeys: storage.keys });

  var restoredState = {};
  var completionCount = 0;

  storage.getAllKeys(function (err, allKeys) {
    if (err && process.env.NODE_ENV !== 'production') {
      console.warn('Error in storage.getAllKeys');
    }
    var persistKeys = allKeys.filter(function (key) {
      return key.indexOf(constants.keyPrefix) === 0;
    }).map(function (key) {
      return key.slice(constants.keyPrefix.length);
    });
    var filteredPersistKeys = persistKeys.filter(passWhitelistBlacklist);
    var keysToRestore = Array.isArray(purgeMode) ? filteredPersistKeys.filter(function (key) {
      return purgeMode.indexOf(key) === -1;
    }) : purgeMode === '*' ? [] : filteredPersistKeys;

    var restoreCount = keysToRestore.length;
    if (restoreCount === 0) complete(null, restoredState);
    (0, _forEach3.default)(keysToRestore, function (key) {
      storage.getItem(createStorageKey(key), function (err, serialized) {
        if (err && process.env.NODE_ENV !== 'production') console.warn('Error restoring data for key:', key, err);else restoredState[key] = rehydrate(key, serialized);
        completionCount += 1;
        if (completionCount === restoreCount) complete(null, restoredState);
      });
    });
  });

  function rehydrate(key, serialized) {
    var state = null;

    try {
      var data = deserialize(serialized);
      state = transforms.reduceRight(function (subState, transformer) {
        return transformer.out(subState, key);
      }, data);
    } catch (err) {
      if (process.env.NODE_ENV !== 'production') console.warn('Error restoring data for key:', key, err);
    }

    return state;
  }

  function complete(err, restoredState) {
    onComplete(err, restoredState);
  }

  function passWhitelistBlacklist(key) {
    if (whitelist && whitelist.indexOf(key) === -1) return false;
    if (blacklist.indexOf(key) !== -1) return false;
    return true;
  }

  if (typeof onComplete !== 'function' && !!Promise) {
    return new Promise(function (resolve, reject) {
      onComplete = function onComplete(err, restoredState) {
        if (err) reject(err);else resolve(restoredState);
      };
    });
  }
}

function defaultDeserialize(serial) {
  return JSON.parse(serial);
}

function createStorageKey(key) {
  return constants.keyPrefix + key;
}
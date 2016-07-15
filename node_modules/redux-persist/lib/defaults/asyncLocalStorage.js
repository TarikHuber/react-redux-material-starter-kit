'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = function (type) {
  var storage = getStorage(type);
  return {
    getItem: function getItem(key, cb) {
      try {
        var s = storage.getItem(key);
        nextTick(function () {
          cb(null, s);
        });
      } catch (e) {
        cb(e);
      }
    },
    setItem: function setItem(key, string, cb) {
      try {
        storage.setItem(key, string);
        nextTick(function () {
          cb(null);
        });
      } catch (e) {
        cb(e);
      }
    },
    removeItem: function removeItem(key, cb) {
      try {
        storage.removeItem(key);
        nextTick(function () {
          cb(null);
        });
      } catch (e) {
        cb(e);
      }
    },
    getAllKeys: function getAllKeys(cb) {
      try {
        var keys = [];
        for (var i = 0; i < storage.length; i++) {
          keys.push(storage.key(i));
        }
        nextTick(function () {
          cb(null, keys);
        });
      } catch (e) {
        cb(e);
      }
    }
  };
};

var genericSetImmediate = typeof setImmediate === 'undefined' ? global.setImmediate : setImmediate;
var nextTick = process && process.nextTick ? process.nextTick : genericSetImmediate;

var noStorage = process && process.env && process.env.NODE_ENV === 'production' ? function () {
  /* noop */return null;
} : function () {
  console.error('redux-persist asyncLocalStorage requires a global localStorage object. Either use a different storage backend or if this is a universal redux application you probably should conditionally persist like so: https://gist.github.com/rt2zz/ac9eb396793f95ff3c3b');
  return null;
};

function hasLocalStorage() {
  try {
    return (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && typeof window.localStorage !== 'undefined';
  } catch (e) {
    return false;
  }
}

function hasSessionStorage() {
  try {
    return (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && typeof window.sessionStorage !== 'undefined';
  } catch (e) {
    return false;
  }
}

function getStorage(type) {
  if (type === 'local') {
    return hasLocalStorage() ? window.localStorage : { getItem: noStorage, setItem: noStorage, removeItem: noStorage, getAllKeys: noStorage };
  }
  if (type === 'session') {
    return hasSessionStorage() ? window.sessionStorage : { getItem: noStorage, setItem: noStorage, removeItem: noStorage, getAllKeys: noStorage };
  }
}
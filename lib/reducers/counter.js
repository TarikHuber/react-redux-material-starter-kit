'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _counter = require('../actions/counter');

var counter = function counter() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _counter.INCREMENT:
      return state + 1;
    case _counter.DECREMENT:
      return state - 1;
    case _counter.RESET:
      return 0;
    default:
      return state;
  }
};

exports.default = counter;
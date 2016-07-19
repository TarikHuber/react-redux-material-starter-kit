'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onIncrement = onIncrement;
exports.onDecrement = onDecrement;
exports.onReset = onReset;
var INCREMENT = exports.INCREMENT = 'INCREMENT';
var DECREMENT = exports.DECREMENT = 'DECREMENT';
var RESET = exports.RESET = 'RESET';

function onIncrement() {
  return {
    type: INCREMENT
  };
}

function onDecrement() {
  return {
    type: DECREMENT
  };
}

function onReset() {
  return {
    type: RESET
  };
}
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTodoDialogOpen = exports.toggleTodo = exports.setVisibilityFilter = exports.addTodo = exports.SET_TODO_DIALOG_OPEN = exports.TOGGLE_TODO = exports.SET_VISIBILITY_FILTER = exports.ADD_TODO = undefined;

var _nodeUuid = require('node-uuid');

var ADD_TODO = exports.ADD_TODO = 'ADD_TODO';
var SET_VISIBILITY_FILTER = exports.SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
var TOGGLE_TODO = exports.TOGGLE_TODO = 'TOGGLE_TODO';
var SET_TODO_DIALOG_OPEN = exports.SET_TODO_DIALOG_OPEN = 'SET_TODO_DIALOG_OPEN';

var addTodo = exports.addTodo = function addTodo(text) {
  return {
    type: 'ADD_TODO',
    id: (0, _nodeUuid.v4)(),
    text: text
  };
};

var setVisibilityFilter = exports.setVisibilityFilter = function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter: filter
  };
};

var toggleTodo = exports.toggleTodo = function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id: id
  };
};

var setTodoDialogOpen = exports.setTodoDialogOpen = function setTodoDialogOpen(open) {
  return {
    type: 'SET_TODO_DIALOG_OPEN',
    open: open
  };
};
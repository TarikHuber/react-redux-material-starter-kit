'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Todo = require('./Todo');

var _Todo2 = _interopRequireDefault(_Todo);

var _List = require('material-ui/List');

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodoList = function TodoList(_ref) {
	var todos = _ref.todos;
	var onTodoClick = _ref.onTodoClick;
	return _react2.default.createElement(
		_List.List,
		null,
		todos.map(function (todo) {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_Todo2.default, _extends({
					key: todo.id
				}, todo, {
					onClickHandler: function onClickHandler() {
						return onTodoClick(todo.id);
					}
				})),
				_react2.default.createElement(_Divider2.default, null)
			);
		})
	);
};

TodoList.propTypes = {
	todos: _react.PropTypes.arrayOf(_react.PropTypes.shape({
		id: _react.PropTypes.string.isRequired,
		completed: _react.PropTypes.bool.isRequired,
		text: _react.PropTypes.string.isRequired
	}).isRequired).isRequired,
	onTodoClick: _react.PropTypes.func.isRequired
};

exports.default = TodoList;
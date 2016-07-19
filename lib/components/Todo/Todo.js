'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Toggle = require('material-ui/Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

var _List = require('material-ui/List');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Todo = function Todo(_ref) {
  var onClickHandler = _ref.onClickHandler;
  var completed = _ref.completed;
  var text = _ref.text;
  var id = _ref.id;
  return _react2.default.createElement(_List.ListItem, { key: id, primaryText: text, onClick: onClickHandler, rightToggle: _react2.default.createElement(_Toggle2.default, { toggled: completed }) });
};

Todo.propTypes = {
  onClickHandler: _react.PropTypes.func.isRequired,
  completed: _react.PropTypes.bool.isRequired,
  text: _react.PropTypes.string.isRequired
};

exports.default = Todo;
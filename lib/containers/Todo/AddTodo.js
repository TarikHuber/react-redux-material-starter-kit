'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _index = require('/var/srv/domains/smartscan.services/www/htdocs/rrm/node_modules/redbox-react/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('/var/srv/domains/smartscan.services/www/htdocs/rrm/node_modules/react-transform-catch-errors/lib/index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('/var/srv/domains/smartscan.services/www/htdocs/rrm/node_modules/react-transform-hmr/lib/index.js');

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = require('react-redux');

var _todo = require('../../actions/todo');

var _todoDialog = require('../../actions/todoDialog');

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	AddTodo: {
		displayName: 'AddTodo'
	}
};

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: 'src/containers/Todo/AddTodo.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: 'src/containers/Todo/AddTodo.js',
	components: _components,
	locals: [],
	imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2(_varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	};
}

var AddTodo = _wrapComponent('AddTodo')(function (_Component) {
	_inherits(AddTodo, _Component);

	function AddTodo(props) {
		_classCallCheck(this, AddTodo);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AddTodo).call(this, props));
	}

	_createClass(AddTodo, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props;
			var todoDialog = _props.todoDialog;
			var setTodoDialogOpen = _props.setTodoDialogOpen;
			var addTodo = _props.addTodo;
			var setErrorText = _props.setErrorText;


			var input = void 0;

			function handleOpen() {
				setTodoDialogOpen(true);
			};

			function handleClose() {
				setErrorText(undefined);
				setTodoDialogOpen(false);
			};

			function handleSubmit(todoText) {

				if (!todoText.input.value.trim()) {

					setErrorText("Text is requred!");
					return;
				}

				addTodo(todoText.input.value);
				handleClose();
			};

			var actions = [_react3.default.createElement(_FlatButton2.default, {
				label: 'Cancel',
				primary: true,
				onTouchTap: handleClose
			}), _react3.default.createElement(_FlatButton2.default, {
				label: 'Submit',
				primary: true,
				onTouchTap: function onTouchTap() {
					return handleSubmit(_this2.refs.todoText);
				}
			})];

			return _react3.default.createElement(
				'div',
				null,
				_react3.default.createElement(
					_Dialog2.default,
					{
						title: 'Add Todo',
						actions: actions,
						modal: false,
						open: todoDialog.open,
						onRequestClose: handleClose
					},
					_react3.default.createElement(
						'form',
						{ onSubmit: function onSubmit(e) {
								e.preventDefault();

								handleSubmit(_this2.refs.todoText);
							} },
						_react3.default.createElement(_TextField2.default, {
							ref: 'todoText',
							hintText: 'Todo text',
							errorText: todoDialog.errorText,
							floatingLabelText: 'Enter a Todo',
							fullWidth: true
						})
					)
				)
			);
		}
	}]);

	return AddTodo;
}(_react2.Component));

AddTodo.propTypes = {

	todoDialog: _react2.PropTypes.object.isRequired,
	setTodoDialogOpen: _react2.PropTypes.func.isRequired,
	addTodo: _react2.PropTypes.func.isRequired,
	setErrorText: _react2.PropTypes.func.isRequired
};

function mapStateToProps(state) {
	var todoDialog = state.todoDialog;


	return {
		todoDialog: todoDialog
	};
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		setTodoDialogOpen: function setTodoDialogOpen(index) {
			dispatch((0, _todoDialog.setTodoDialogOpen)(index));
		},
		addTodo: function addTodo(text) {
			dispatch((0, _todo.addTodo)(text));
		},
		setErrorText: function setErrorText(text) {
			dispatch((0, _todoDialog.setErrorText)(text));
		}

	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AddTodo);
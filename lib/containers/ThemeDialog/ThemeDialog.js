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

var _find = require('lodash/find');

var _find2 = _interopRequireDefault(_find);

var _todo = require('../../actions/todo');

var _appStyle = require('../../actions/appStyle');

var _RadioButton = require('material-ui/RadioButton');

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _themes = require('../../themes/themes');

var _themes2 = _interopRequireDefault(_themes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	ThemeDialog: {
		displayName: 'ThemeDialog'
	}
};

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: 'src/containers/ThemeDialog/ThemeDialog.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: 'src/containers/ThemeDialog/ThemeDialog.js',
	components: _components,
	locals: [],
	imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2(_varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	};
}

var styles = {
	body: {
		margin: 10
	},
	radioButton: {
		marginBottom: 16
	}
};

var ThemeDialog = _wrapComponent('ThemeDialog')(function (_Component) {
	_inherits(ThemeDialog, _Component);

	function ThemeDialog(props) {
		_classCallCheck(this, ThemeDialog);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ThemeDialog).call(this, props));
	}

	_createClass(ThemeDialog, [{
		key: 'render',
		value: function render() {
			var _props = this.props;
			var intl = _props.intl;
			var appStyle = _props.appStyle;
			var setThemeDialogOpen = _props.setThemeDialogOpen;
			var addTodo = _props.addTodo;
			var setErrorText = _props.setErrorText;
			var setAppTheme = _props.setAppTheme;


			function handleClose() {
				setThemeDialogOpen(false);
			};

			function handleChange(object, value) {

				var theme = (0, _find2.default)(_themes2.default, { id: value });
				setAppTheme(theme);
				setThemeDialogOpen(false);
			};

			return _react3.default.createElement(
				'div',
				null,
				_react3.default.createElement(
					_Dialog2.default,
					{
						title: intl.messages.select_theme,

						modal: false,
						open: appStyle.dialogOpen,
						onRequestClose: handleClose,
						autoScrollBodyContent: true
					},
					_react3.default.createElement(
						'div',
						{ style: styles.body },
						_react3.default.createElement(
							_RadioButton.RadioButtonGroup,
							{
								name: 'theme',
								valueSelected: appStyle.theme.id,
								onChange: function onChange(object, value) {
									return handleChange(object, value);
								}
							},
							_themes2.default.map(function (theme) {
								return _react3.default.createElement(_RadioButton.RadioButton, {
									value: theme.id,
									key: theme.id,
									label: intl.messages[theme.id],
									style: styles.radioButton
								});
							})
						)
					)
				)
			);
		}
	}]);

	return ThemeDialog;
}(_react2.Component));

ThemeDialog.propTypes = {
	intl: _react2.PropTypes.object.isRequired,
	appStyle: _react2.PropTypes.object.isRequired,
	setThemeDialogOpen: _react2.PropTypes.func.isRequired,
	addTodo: _react2.PropTypes.func.isRequired,
	setErrorText: _react2.PropTypes.func.isRequired,
	setAppTheme: _react2.PropTypes.func.isRequired
};

function mapStateToProps(state) {
	var intl = state.intl;
	var appStyle = state.appStyle;


	return {
		intl: intl,
		appStyle: appStyle
	};
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		setThemeDialogOpen: function setThemeDialogOpen(index) {
			dispatch((0, _appStyle.setThemeDialogOpen)(index));
		},
		addTodo: function addTodo(text) {
			dispatch((0, _todo.addTodo)(text));
		},
		setErrorText: function (_setErrorText) {
			function setErrorText(_x) {
				return _setErrorText.apply(this, arguments);
			}

			setErrorText.toString = function () {
				return _setErrorText.toString();
			};

			return setErrorText;
		}(function (text) {
			dispatch(setErrorText(text));
		}),
		setAppTheme: function setAppTheme(theme) {
			dispatch((0, _appStyle.setAppTheme)(theme));
		}

	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ThemeDialog);
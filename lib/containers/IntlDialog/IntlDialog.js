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

var _intl = require('../../actions/intl');

var _RadioButton = require('material-ui/RadioButton');

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _languages = require('../../translations/languages');

var _languages2 = _interopRequireDefault(_languages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	IntlDialog: {
		displayName: 'IntlDialog'
	}
};

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: 'src/containers/IntlDialog/IntlDialog.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: 'src/containers/IntlDialog/IntlDialog.js',
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

var IntlDialog = _wrapComponent('IntlDialog')(function (_Component) {
	_inherits(IntlDialog, _Component);

	function IntlDialog(props) {
		_classCallCheck(this, IntlDialog);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IntlDialog).call(this, props));
	}

	_createClass(IntlDialog, [{
		key: 'render',
		value: function render() {
			var _props = this.props;
			var intl = _props.intl;
			var appStyle = _props.appStyle;
			var setIntlDialogOpen = _props.setIntlDialogOpen;
			var addTodo = _props.addTodo;
			var setErrorText = _props.setErrorText;
			var updateIntl = _props.updateIntl;


			function handleClose() {
				setIntlDialogOpen(false);
			};

			function handleChange(object, value) {

				var language = (0, _find2.default)(_languages2.default, { id: value });
				updateIntl(value);
				setIntlDialogOpen(false);
			};

			var currentLanguage = (0, _find2.default)(_languages2.default, { key: intl.locale });

			return _react3.default.createElement(
				'div',
				null,
				_react3.default.createElement(
					_Dialog2.default,
					{
						title: intl.messages.select_language || 'language',

						modal: false,
						open: intl.dialogOpen,
						onRequestClose: handleClose,
						autoScrollBodyContent: true
					},
					_react3.default.createElement(
						'div',
						{ style: styles.body },
						_react3.default.createElement(
							_RadioButton.RadioButtonGroup,
							{
								name: 'languages',
								valueSelected: currentLanguage.key,
								onChange: function onChange(object, value) {
									return handleChange(object, value);
								}
							},
							_languages2.default.map(function (language) {
								return _react3.default.createElement(_RadioButton.RadioButton, {
									value: language.key,
									key: language.key,
									label: intl.messages[language.id],
									style: styles.radioButton
								});
							})
						)
					)
				)
			);
		}
	}]);

	return IntlDialog;
}(_react2.Component));

IntlDialog.propTypes = {
	intl: _react2.PropTypes.object.isRequired,
	appStyle: _react2.PropTypes.object.isRequired,
	setIntlDialogOpen: _react2.PropTypes.func.isRequired,
	addTodo: _react2.PropTypes.func.isRequired,
	setErrorText: _react2.PropTypes.func.isRequired,
	updateIntl: _react2.PropTypes.func.isRequired
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
		setIntlDialogOpen: function setIntlDialogOpen(index) {
			dispatch((0, _intl.setIntlDialogOpen)(index));
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
		updateIntl: function updateIntl(locale) {
			dispatch((0, _intl.updateIntl)(locale));
		}

	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(IntlDialog);
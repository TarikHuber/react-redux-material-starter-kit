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

var _reactIntl = require('react-intl');

var _find = require('lodash/find');

var _find2 = _interopRequireDefault(_find);

var _List = require('material-ui/List');

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Subheader = require('material-ui/Subheader');

var _Subheader2 = _interopRequireDefault(_Subheader);

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _style = require('material-ui/svg-icons/image/style');

var _style2 = _interopRequireDefault(_style);

var _language = require('material-ui/svg-icons/action/language');

var _language2 = _interopRequireDefault(_language);

var _Activity = require('../../components/Activity/Activity');

var _Activity2 = _interopRequireDefault(_Activity);

var _appNavDrawer = require('../../actions/appNavDrawer');

var _appStyle = require('../../actions/appStyle');

var _intl = require('../../actions/intl');

var _languages = require('../../translations/languages');

var _languages2 = _interopRequireDefault(_languages);

var _themes = require('../../themes/themes');

var _themes2 = _interopRequireDefault(_themes);

var _ThemeDialog = require('../../containers/ThemeDialog/ThemeDialog');

var _ThemeDialog2 = _interopRequireDefault(_ThemeDialog);

var _IntlDialog = require('../../containers/IntlDialog/IntlDialog');

var _IntlDialog2 = _interopRequireDefault(_IntlDialog);

var _Toggle = require('material-ui/Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	MainSettings: {
		displayName: 'MainSettings'
	}
};

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: 'src/containers/Settings/MainSettings.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: 'src/containers/Settings/MainSettings.js',
	components: _components,
	locals: [],
	imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2(_varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	};
}

var MainSettings = _wrapComponent('MainSettings')(function (_Component) {
	_inherits(MainSettings, _Component);

	function MainSettings(props) {
		_classCallCheck(this, MainSettings);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(MainSettings).call(this, props));
	}

	_createClass(MainSettings, [{
		key: 'render',
		value: function render() {
			var _props = this.props;
			var intl = _props.intl;
			var appStyle = _props.appStyle;
			var setThemeDialogOpen = _props.setThemeDialogOpen;
			var setIntlDialogOpen = _props.setIntlDialogOpen;

			var currentLanguage = (0, _find2.default)(_languages2.default, { key: intl.locale });

			return _react3.default.createElement(
				_Activity2.default,
				{ title: intl.messages.settings, nav_index: '/settings' },
				_react3.default.createElement(
					'div',
					null,
					_react3.default.createElement(
						_List.List,
						null,
						_react3.default.createElement(
							_Subheader2.default,
							null,
							intl.messages.general
						),
						_react3.default.createElement(_List.ListItem, {
							leftIcon: _react3.default.createElement(_style2.default, null),
							primaryText: intl.messages.theme,
							secondaryText: intl.messages[appStyle.theme.id],
							onClick: function onClick() {
								setThemeDialogOpen(true);
							}
						}),
						_react3.default.createElement(_ThemeDialog2.default, null),
						_react3.default.createElement(_Divider2.default, { inset: true }),
						_react3.default.createElement(_List.ListItem, {
							leftIcon: _react3.default.createElement(_language2.default, null),
							primaryText: intl.messages.language,
							secondaryText: intl.messages[currentLanguage.id],
							onClick: function onClick() {
								setIntlDialogOpen(true);
							}
						}),
						_react3.default.createElement(_IntlDialog2.default, null)
					),
					_react3.default.createElement(_Divider2.default, null),
					_react3.default.createElement(
						_List.List,
						null,
						_react3.default.createElement(
							_Subheader2.default,
							null,
							'Navigation'
						),
						_react3.default.createElement(_List.ListItem, { primaryText: 'Responsive', rightToggle: _react3.default.createElement(_Toggle2.default, null) }),
						_react3.default.createElement(_Divider2.default, { inset: true })
					)
				)
			);
		}
	}]);

	return MainSettings;
}(_react2.Component));

;

MainSettings.propTypes = {
	intl: _react2.PropTypes.object.isRequired,
	appStyle: _react2.PropTypes.object.isRequired,
	setAppBarTitle: _react2.PropTypes.func.isRequired,
	setSelectedIndex: _react2.PropTypes.func.isRequired,
	setThemeDialogOpen: _react2.PropTypes.func.isRequired,
	setIntlDialogOpen: _react2.PropTypes.func.isRequired
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
		setAppBarTitle: function (_setAppBarTitle) {
			function setAppBarTitle(_x) {
				return _setAppBarTitle.apply(this, arguments);
			}

			setAppBarTitle.toString = function () {
				return _setAppBarTitle.toString();
			};

			return setAppBarTitle;
		}(function (title) {
			dispatch(setAppBarTitle(title));
		}),
		setSelectedIndex: function setSelectedIndex(index) {
			dispatch((0, _appNavDrawer.setSelectedIndex)(index));
		},
		setThemeDialogOpen: function setThemeDialogOpen(open) {
			dispatch((0, _appStyle.setThemeDialogOpen)(open));
		},
		setIntlDialogOpen: function setIntlDialogOpen(open) {
			dispatch((0, _intl.setIntlDialogOpen)(open));
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MainSettings);
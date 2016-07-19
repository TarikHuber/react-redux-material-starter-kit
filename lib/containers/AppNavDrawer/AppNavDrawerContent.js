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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = require('react-redux');

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

var _reactIntl = require('react-intl');

var _appNavDrawer = require('../../actions/appNavDrawer');

var _materialUi = require('material-ui');

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _reactRouterRedux = require('react-router-redux');

var _reduxTitle = require('redux-title');

var _inbox = require('material-ui/svg-icons/content/inbox');

var _inbox2 = _interopRequireDefault(_inbox);

var _settings = require('material-ui/svg-icons/action/settings');

var _settings2 = _interopRequireDefault(_settings);

var _grade = require('material-ui/svg-icons/action/grade');

var _grade2 = _interopRequireDefault(_grade);

var _language = require('material-ui/svg-icons/action/language');

var _language2 = _interopRequireDefault(_language);

var _flag = require('material-ui/svg-icons/content/flag');

var _flag2 = _interopRequireDefault(_flag);

var _dashboard = require('material-ui/svg-icons/action/dashboard');

var _dashboard2 = _interopRequireDefault(_dashboard);

var _home = require('material-ui/svg-icons/action/home');

var _home2 = _interopRequireDefault(_home);

var _send = require('material-ui/svg-icons/content/send');

var _send2 = _interopRequireDefault(_send);

var _drafts = require('material-ui/svg-icons/content/drafts');

var _drafts2 = _interopRequireDefault(_drafts);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _info = require('material-ui/svg-icons/action/info');

var _info2 = _interopRequireDefault(_info);

var _folder = require('material-ui/svg-icons/file/folder');

var _folder2 = _interopRequireDefault(_folder);

var _AppNavDrawerContent = require('./Messages/AppNavDrawerContent.i18n');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	AppNavDrawerContent: {
		displayName: 'AppNavDrawerContent'
	}
};

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: 'src/containers/AppNavDrawer/AppNavDrawerContent.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: 'src/containers/AppNavDrawer/AppNavDrawerContent.js',
	components: _components,
	locals: [],
	imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2(_varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	};
}

var ReactGridLayout = require('react-grid-layout');

var styles = {

	header: {
		height: '100%',
		overflow: 'hidden'

	},
	paper: {
		display: 'inline-block',
		margin: '16px 32px 16px 0'
	}

};

function browserSelector(_ref) {
	var browser = _ref.browser;

	return { browser: browser };
}

var AppNavDrawerContent = _wrapComponent('AppNavDrawerContent')(function (_Component) {
	_inherits(AppNavDrawerContent, _Component);

	function AppNavDrawerContent(props) {
		_classCallCheck(this, AppNavDrawerContent);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AppNavDrawerContent).call(this, props));
	}

	_createClass(AppNavDrawerContent, [{
		key: 'render',
		value: function render() {
			var _props = this.props;
			var intl = _props.intl;
			var auth = _props.auth;
			var setAppBarTitle = _props.setAppBarTitle;
			var setSelectedIndex = _props.setSelectedIndex;
			var to = _props.to;
			var setDrawerOpen = _props.setDrawerOpen;
			var drawerProps = _props.drawerProps;
			var toggleDrawerOpen = _props.toggleDrawerOpen;
			var browser = _props.browser;
			var location = _props.location;
			var updateTitle = _props.updateTitle;


			var docked = browser.greaterThan.medium ? true : false;
			var index = this.props.location ? this.props.location.pathname : '/';

			function findMessage(path) {
				return _AppNavDrawerContent.messages.path === path;
			}

			function handleClick(path) {

				if (drawerProps.open) {
					setDrawerOpen(false);
				}

				to(path);
				updateTitle(_config2.default.app.name + ' - ' + (intl.messages[path] || path));
			}

			var drawerP = _extends({}, drawerProps, {
				docked: docked,
				open: docked ? docked : drawerProps.open,
				onRequestChange: function onRequestChange() {
					return toggleDrawerOpen();
				}
			});

			var SelectableList = (0, _materialUi.MakeSelectable)(_materialUi.List);

			var restricted = _react3.default.createElement('div', null);

			if (auth.apiToken !== undefined) {
				restricted = _react3.default.createElement(
					'div',
					null,
					_react3.default.createElement(_Divider2.default, null),
					_react3.default.createElement(
						_materialUi.Subheader,
						null,
						'Restricted Examples'
					),
					_react3.default.createElement(
						SelectableList,
						{ value: index, onChange: function onChange(event, itemValue) {
								return handleClick(itemValue);
							} },
						_react3.default.createElement(_materialUi.ListItem, {
							primaryText: _react3.default.createElement(_reactIntl.FormattedMessage, _AppNavDrawerContent.messages['responsive']),
							leftIcon: _react3.default.createElement(_folder2.default, null),
							primaryTogglesNestedList: true,
							nestedItems: [_react3.default.createElement(_materialUi.ListItem, { value: 'responsive',
								primaryText: _react3.default.createElement(_reactIntl.FormattedMessage, _AppNavDrawerContent.messages['responsive']),
								rightIcon: _react3.default.createElement(_info2.default, null) })]
						})
					),
					_react3.default.createElement(
						SelectableList,
						{ value: index, onChange: function onChange(event, itemValue) {
								return handleClick(itemValue);
							} },
						_react3.default.createElement(_materialUi.ListItem, {
							primaryText: 'REST API',
							leftIcon: _react3.default.createElement(_folder2.default, null),
							primaryTogglesNestedList: true,
							nestedItems: [_react3.default.createElement(_materialUi.ListItem, { value: 'gitusers',
								primaryText: 'Git Users',
								rightIcon: _react3.default.createElement(_info2.default, null)

							}), _react3.default.createElement(_materialUi.ListItem, { value: 'repos',
								primaryText: 'Repos',
								rightIcon: _react3.default.createElement(_info2.default, null)

							})]
						})
					)
				);
			}

			return _react3.default.createElement(
				'div',
				null,
				_react3.default.createElement(
					SelectableList,
					{ value: index, onChange: function onChange(event, itemValue) {
							return handleClick(itemValue);
						} },
					_react3.default.createElement(_materialUi.ListItem, { value: 'dashboard', primaryText: _react3.default.createElement(_reactIntl.FormattedMessage, _AppNavDrawerContent.messages['dashboard']), leftIcon: _react3.default.createElement(_dashboard2.default, null) }),
					_react3.default.createElement(_Divider2.default, null),
					_react3.default.createElement(
						_materialUi.Subheader,
						null,
						'Public Examples'
					),
					_react3.default.createElement(_materialUi.ListItem, {
						primaryText: _react3.default.createElement(_reactIntl.FormattedMessage, _AppNavDrawerContent.messages['basic']),
						leftIcon: _react3.default.createElement(_folder2.default, null),
						primaryTogglesNestedList: true,
						nestedItems: [_react3.default.createElement(_materialUi.ListItem, { value: 'foo', primaryText: _react3.default.createElement(_reactIntl.FormattedMessage, _AppNavDrawerContent.messages['foo']), leftIcon: _react3.default.createElement(_grade2.default, null) }), _react3.default.createElement(_materialUi.ListItem, { value: 'props', primaryText: intl.messages.props || 'props', leftIcon: _react3.default.createElement(_grade2.default, null) }), _react3.default.createElement(_materialUi.ListItem, { value: 'propsanddispatch', primaryText: intl.messages.propsanddispatch || 'propsanddispatch', leftIcon: _react3.default.createElement(_grade2.default, null) })]
					}),
					_react3.default.createElement(_materialUi.ListItem, {
						primaryText: _react3.default.createElement(_reactIntl.FormattedMessage, _AppNavDrawerContent.messages['advanced']),
						leftIcon: _react3.default.createElement(_folder2.default, null),
						primaryTogglesNestedList: true,
						nestedItems: [_react3.default.createElement(_materialUi.ListItem, { value: 'counter', primaryText: _react3.default.createElement(_reactIntl.FormattedMessage, _AppNavDrawerContent.messages['counter']), leftIcon: _react3.default.createElement(_grade2.default, null) }), _react3.default.createElement(_materialUi.ListItem, { value: 'todo', primaryText: _react3.default.createElement(_reactIntl.FormattedMessage, _AppNavDrawerContent.messages['todo']), leftIcon: _react3.default.createElement(_grade2.default, null) })]
					}),
					restricted,
					_react3.default.createElement(_Divider2.default, null),
					_react3.default.createElement(
						_materialUi.Subheader,
						null,
						_react3.default.createElement(_reactIntl.FormattedMessage, _AppNavDrawerContent.messages['settings'])
					),
					_react3.default.createElement(_materialUi.ListItem, { value: 'settings', primaryText: _react3.default.createElement(_reactIntl.FormattedMessage, _AppNavDrawerContent.messages['settings']), leftIcon: _react3.default.createElement(_settings2.default, null) })
				)
			);
		}
	}]);

	return AppNavDrawerContent;
}(_react2.Component));

AppNavDrawerContent.propTypes = {
	intl: _react2.PropTypes.object.isRequired,
	auth: _react2.PropTypes.object.isRequired,
	drawerProps: _react2.PropTypes.object.isRequired,
	toggleDrawerOpen: _react2.PropTypes.func.isRequired,
	setDrawerOpen: _react2.PropTypes.func.isRequired,
	setSelectedIndex: _react2.PropTypes.func.isRequired,
	setAppBarTitle: _react2.PropTypes.func.isRequired,
	updateTitle: _react2.PropTypes.func.isRequired,
	browser: _react2.PropTypes.object.isRequired,
	to: _react2.PropTypes.func.isRequired,
	location: _react2.PropTypes.object.isRequired
};

AppNavDrawerContent.contextTypes = {
	router: _react2.PropTypes.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
	var intl = state.intl;
	var auth = state.auth;
	var appNavDrawer = state.appNavDrawer;
	var responsiveStateReducer = state.responsiveStateReducer;

	return {
		drawerProps: appNavDrawer,
		browser: responsiveStateReducer,
		auth: auth,
		intl: intl
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		toggleDrawerOpen: function toggleDrawerOpen() {
			dispatch((0, _appNavDrawer.toggleDrawerOpen)());
		},
		setDrawerOpen: function setDrawerOpen(open) {
			dispatch((0, _appNavDrawer.setDrawerOpen)(open));
		},
		to: function to(path) {
			dispatch((0, _reactRouterRedux.push)(path));
		},
		setSelectedIndex: function setSelectedIndex(index) {
			dispatch((0, _appNavDrawer.setSelectedIndex)(index));
		},
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
		updateTitle: function updateTitle(title) {
			dispatch((0, _reduxTitle.updateTitle)(title));
		}

	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppNavDrawerContent);
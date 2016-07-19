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

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _reactRouterRedux = require('react-router-redux');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _home = require('material-ui/svg-icons/action/home');

var _home2 = _interopRequireDefault(_home);

var _lock = require('material-ui/svg-icons/action/lock');

var _lock2 = _interopRequireDefault(_lock);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _appNavDrawer = require('../../actions/appNavDrawer');

var _keyboardArrowDown = require('material-ui/svg-icons/hardware/keyboard-arrow-down');

var _keyboardArrowDown2 = _interopRequireDefault(_keyboardArrowDown);

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _moreVert = require('material-ui/svg-icons/navigation/more-vert');

var _moreVert2 = _interopRequireDefault(_moreVert);

var _signIn = require('../../actions/signIn');

var _auth = require('../../actions/auth');

var _SignIn = require('../../containers/Auth/SignIn');

var _SignIn2 = _interopRequireDefault(_SignIn);

var _colors = require('material-ui/styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
		AppNavDrawerHeader: {
				displayName: 'AppNavDrawerHeader'
		}
};

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
		filename: 'src/containers/AppNavDrawer/AppNavDrawerHeader.js',
		components: _components,
		locals: [module],
		imports: [_react3.default]
});

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
		filename: 'src/containers/AppNavDrawer/AppNavDrawerHeader.js',
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
		button: {

				marginTop: 45,
				marginLeft: 65
		}
};

var AppNavDrawerHeader = _wrapComponent('AppNavDrawerHeader')(function (_Component) {
		_inherits(AppNavDrawerHeader, _Component);

		function AppNavDrawerHeader(props) {
				_classCallCheck(this, AppNavDrawerHeader);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(AppNavDrawerHeader).call(this, props));
		}

		_createClass(AppNavDrawerHeader, [{
				key: 'render',
				value: function render() {
						var _props = this.props;
						var to = _props.to;
						var logout = _props.logout;
						var auth = _props.auth;
						var appStyle = _props.appStyle;
						var setSignInDialogOpen = _props.setSignInDialogOpen;
						var toggleDrawerOpen = _props.toggleDrawerOpen;


						var style = {

								backgroundColor: appStyle.theme.source.palette.primary2Color,
								color: appStyle.theme.source.palette.alternateTextColor,
								padding: '6px',
								height: 150

						};

						function handleSignIn() {
								to('signin');
								toggleDrawerOpen();
						}

						function handleSignOut() {
								logout();
								to('signin');
						}

						var headerContent = _react3.default.createElement('div', null);

						if (auth.apiToken === undefined) {
								headerContent = _react3.default.createElement(
										'div',
										null,
										_react3.default.createElement(_RaisedButton2.default, {
												label: 'Sign in',
												labelPosition: 'after',
												secondary: true,
												icon: _react3.default.createElement(_lock2.default, null),
												style: styles.button,
												onClick: handleSignIn
										})
								);
						} else {
								headerContent = _react3.default.createElement(
										'div',
										null,
										_react3.default.createElement(
												_Avatar2.default,
												{
														color: _colors.deepOrange300,
														backgroundColor: _colors.purple500,
														size: 30,
														style: { margin: 5 }
												},
												'U'
										),
										_react3.default.createElement(
												_IconMenu2.default,
												{ style: { float: 'right', marginTop: '80px' },
														iconButtonElement: _react3.default.createElement(
																_IconButton2.default,
																null,
																_react3.default.createElement(_keyboardArrowDown2.default, { color: 'white' })
														)
												},
												_react3.default.createElement(_MenuItem2.default, { primaryText: 'Logout', onTouchTap: handleSignOut })
										),
										_react3.default.createElement(
												'p',
												null,
												auth.user ? auth.user.name : ''
										),
										_react3.default.createElement(
												'div',
												null,
												auth.user ? auth.user.email : ''
										)
								);
						}

						return _react3.default.createElement(
								_Paper2.default,
								{ style: style },
								headerContent
						);
				}
		}]);

		return AppNavDrawerHeader;
}(_react2.Component));

AppNavDrawerHeader.propTypes = {
		appStyle: _react2.PropTypes.object.isRequired,
		auth: _react2.PropTypes.object.isRequired,
		setSignInDialogOpen: _react2.PropTypes.func.isRequired,
		logout: _react2.PropTypes.func.isRequired,
		to: _react2.PropTypes.func.isRequired,
		toggleDrawerOpen: _react2.PropTypes.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
		var auth = state.auth;
		var appStyle = state.appStyle;

		return {
				appStyle: appStyle,
				auth: auth
		};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
		return {

				setSignInDialogOpen: function setSignInDialogOpen(open) {
						dispatch((0, _signIn.setSignInDialogOpen)(open));
				},
				logout: function logout() {
						dispatch((0, _auth.logout)());
				},
				to: function to(path) {
						dispatch((0, _reactRouterRedux.push)(path));
				},
				toggleDrawerOpen: function toggleDrawerOpen() {
						dispatch((0, _appNavDrawer.toggleDrawerOpen)());
				}

		};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppNavDrawerHeader);
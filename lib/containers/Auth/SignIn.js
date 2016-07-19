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

exports.handleRehidration = handleRehidration;

var _reactRedux = require('react-redux');

var _signIn = require('../../actions/signIn');

var _auth = require('../../actions/auth');

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _SignIn = require('./SignIn.i18n');

var _lockOpen = require('material-ui/svg-icons/action/lock-open');

var _lockOpen2 = _interopRequireDefault(_lockOpen);

var _reactRouterRedux = require('react-router-redux');

var _MiddleContainer = require('../../containers/MiddleContainer/MiddleContainer');

var _MiddleContainer2 = _interopRequireDefault(_MiddleContainer);

var _Activity = require('../../components/Activity/Activity');

var _Activity2 = _interopRequireDefault(_Activity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	SignIn: {
		displayName: 'SignIn'
	}
};

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: 'src/containers/Auth/SignIn.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: 'src/containers/Auth/SignIn.js',
	components: _components,
	locals: [],
	imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2(_varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	};
}

var location = void 0;
var to = void 0;

var fields = {
	userName: 'userName',
	password: 'password'
};

var styles = {

	main_container: {
		float: 'left',
		position: 'relative',
		left: '50%',
		top: '50%'
	},

	fixer_container: {
		float: 'left',
		position: 'relative',
		left: '-50%',
		top: '-50%'
	},

	button: {
		float: 'right'
	}
};

function handleRehidration() {

	if (location !== undefined && location.query.redirect !== undefined) {
		to(location.query.redirect);
	}
}

var SignIn = _wrapComponent('SignIn')(function (_Component) {
	_inherits(SignIn, _Component);

	function SignIn(props) {
		_classCallCheck(this, SignIn);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SignIn).call(this, props));
	}

	_createClass(SignIn, [{
		key: 'componentWillMount',
		value: function componentWillMount() {

			location = this.props.location;
			to = this.props.to;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props;
			var intl = _props.intl;
			var login = _props.login;
			var signIn = _props.signIn;
			var setSignInDialogOpen = _props.setSignInDialogOpen;
			var setSignInTextErrors = _props.setSignInTextErrors;
			var to = _props.to;
			var location = _props.location;


			function handleOpen() {
				setSignInDialogOpen(true);
			};

			function handleClose() {
				//setErrorText(undefined);
				setSignInDialogOpen(false);
			};

			function handleSubmit(refs) {

				var errors = {};

				Object.keys(refs).forEach(function (key) {
					if (!refs[key].input.value.trim()) {
						errors[key] = "Is required!";
					}
				});

				setSignInTextErrors(errors);

				if (Object.getOwnPropertyNames(errors).length > 0) {
					return;
				}

				var user = refs[fields.userName].input.value;
				var password = refs[fields.password].input.value;

				login(user, password, location.query.redirect);
			};

			function handleKeyDown(event, refs) {

				if (event.keyCode === 13) {
					handleSubmit(refs);
				}
			}

			return _react3.default.createElement(
				_Activity2.default,
				{ nav_index: '/signin', title: intl.messages.signin },
				_react3.default.createElement(
					_MiddleContainer2.default,
					{ top: '50px' },
					_react3.default.createElement(
						'form',
						{ onSubmit: function onSubmit(e) {
								e.preventDefault();
								handleSubmit(_this2.refs);
							} },
						_react3.default.createElement(_TextField2.default, {
							ref: fields.userName,
							hintText: 'Enter any username you want',
							errorText: signIn.errors.userName,
							floatingLabelText: 'Username',
							onKeyDown: function onKeyDown(event) {
								return handleKeyDown(event, _this2.refs);
							}
						}),
						' ',
						_react3.default.createElement('br', null),
						_react3.default.createElement(_TextField2.default, {
							ref: fields.password,
							type: 'password',
							hintText: 'Enter any password',
							errorText: signIn.errors.password,
							floatingLabelText: 'Password',
							onKeyDown: function onKeyDown(event) {
								return handleKeyDown(event, _this2.refs);
							}
						}),
						' ',
						_react3.default.createElement('br', null),
						_react3.default.createElement(_RaisedButton2.default, {
							label: 'Sign in',
							labelPosition: 'after',
							secondary: true,
							icon: _react3.default.createElement(_lockOpen2.default, null),
							style: styles.button,
							onTouchTap: function onTouchTap() {
								return handleSubmit(_this2.refs);
							}

						}),
						' ',
						_react3.default.createElement('br', null)
					)
				)
			);
		}
	}]);

	return SignIn;
}(_react2.Component));

SignIn.propTypes = {
	intl: _react2.PropTypes.object.isRequired,
	signIn: _react2.PropTypes.object.isRequired,
	auth: _react2.PropTypes.object.isRequired,
	setSignInDialogOpen: _react2.PropTypes.func.isRequired,
	setSignInTextErrors: _react2.PropTypes.func.isRequired,
	login: _react2.PropTypes.func.isRequired,
	to: _react2.PropTypes.func.isRequired,
	location: _react2.PropTypes.object.isRequired
};

function mapStateToProps(state) {
	var intl = state.intl;
	var auth = state.auth;
	var signIn = state.signIn;


	return {
		intl: intl,
		signIn: signIn,
		auth: auth
	};
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {

		setSignInDialogOpen: function setSignInDialogOpen(open) {
			dispatch((0, _signIn.setSignInDialogOpen)(open));
		},
		setSignInTextErrors: function setSignInTextErrors(errors) {
			dispatch((0, _signIn.setSignInTextErrors)(errors));
		},
		login: function login(user, password, redirect) {
			dispatch((0, _auth.login)(user, password, redirect));
		},
		to: function to(path) {
			dispatch((0, _reactRouterRedux.push)(path));
		}

	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SignIn);
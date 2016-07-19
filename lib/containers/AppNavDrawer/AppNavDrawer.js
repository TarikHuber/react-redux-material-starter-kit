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

var _appNavDrawer = require('../../actions/appNavDrawer');

var _materialUi = require('material-ui');

var _AppNavDrawerFooter = require('../../components/AppNavDrawer/AppNavDrawerFooter');

var _AppNavDrawerFooter2 = _interopRequireDefault(_AppNavDrawerFooter);

var _AppNavDrawerHeader = require('./AppNavDrawerHeader');

var _AppNavDrawerHeader2 = _interopRequireDefault(_AppNavDrawerHeader);

var _AppNavDrawerContent = require('./AppNavDrawerContent');

var _AppNavDrawerContent2 = _interopRequireDefault(_AppNavDrawerContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	AppNavDrawer: {
		displayName: 'AppNavDrawer'
	}
};

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: 'src/containers/AppNavDrawer/AppNavDrawer.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: 'src/containers/AppNavDrawer/AppNavDrawer.js',
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

var AppNavDrawer = _wrapComponent('AppNavDrawer')(function (_Component) {
	_inherits(AppNavDrawer, _Component);

	function AppNavDrawer(props) {
		_classCallCheck(this, AppNavDrawer);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AppNavDrawer).call(this, props));
	}

	_createClass(AppNavDrawer, [{
		key: 'render',
		value: function render() {
			var _props = this.props;
			var setSelectedIndex = _props.setSelectedIndex;
			var drawerProps = _props.drawerProps;
			var toggleDrawerOpen = _props.toggleDrawerOpen;
			var browser = _props.browser;


			var docked = browser.greaterThan.medium;

			function handleDrawerToggle() {
				toggleDrawerOpen();
			}

			var drawerP = _extends({}, drawerProps, {
				docked: docked,
				open: docked ? docked : drawerProps.open,
				onRequestChange: function onRequestChange() {
					return toggleDrawerOpen();
				}
			});

			return _react3.default.createElement(
				'div',
				{ style: styles.header },
				_react3.default.createElement(
					_materialUi.Drawer,
					drawerP,
					_react3.default.createElement(_AppNavDrawerHeader2.default, null),
					_react3.default.createElement(_AppNavDrawerContent2.default, { location: this.props.location }),
					_react3.default.createElement(_AppNavDrawerFooter2.default, null)
				)
			);
		}
	}]);

	return AppNavDrawer;
}(_react2.Component));

AppNavDrawer.propTypes = {
	drawerProps: _react2.PropTypes.object.isRequired,
	toggleDrawerOpen: _react2.PropTypes.func.isRequired,
	setSelectedIndex: _react2.PropTypes.func.isRequired,
	browser: _react2.PropTypes.object.isRequired,
	location: _react2.PropTypes.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
	var appNavDrawer = state.appNavDrawer;
	var responsiveStateReducer = state.responsiveStateReducer;

	return {
		drawerProps: appNavDrawer,
		browser: responsiveStateReducer
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		toggleDrawerOpen: function toggleDrawerOpen() {
			dispatch((0, _appNavDrawer.toggleDrawerOpen)());
		},
		setSelectedIndex: function setSelectedIndex(index) {
			dispatch((0, _appNavDrawer.setSelectedIndex)(index));
		}

	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppNavDrawer);
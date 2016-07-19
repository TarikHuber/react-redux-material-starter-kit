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

var _reduxResponsive = require('redux-responsive');

var _appNavDrawer = require('../../actions/appNavDrawer');

var _AppNavDrawer = require('../../containers/AppNavDrawer/AppNavDrawer');

var _AppNavDrawer2 = _interopRequireDefault(_AppNavDrawer);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _IconButton = require('material-ui/IconButton/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _moreVert = require('material-ui/svg-icons/navigation/more-vert');

var _moreVert2 = _interopRequireDefault(_moreVert);

var _colors = require('material-ui/styles/colors');

var _darkBaseTheme = require('material-ui/styles/baseThemes/darkBaseTheme');

var _darkBaseTheme2 = _interopRequireDefault(_darkBaseTheme);

var _lightBaseTheme = require('material-ui/styles/baseThemes/lightBaseTheme');

var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	App: {
		displayName: 'App'
	}
};

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: 'src/containers/App/App.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: 'src/containers/App/App.js',
	components: _components,
	locals: [],
	imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2(_varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	};
}

var primaryColor = '#00387b';
var margingLeft = '256px';

var styles = {
	appBar_docked: {
		position: 'fixed',
		zIndex: 2,

		top: 0,
		height: 64,
		marginLeft: '256px',
		marginRight: '256px',
		_lessThan_medium: {
			marginLeft: '0px',
			marginRight: '0px'
		}
	},
	appBar_undocked: {
		position: 'fixed',
		zIndex: 2,
		top: 0,
		height: 64,
		marginLeft: '0px',
		marginRight: '0px'
	},
	content_docked: {
		marginLeft: '256px',

		padding: '0px'
	},
	content_undocked: {
		marginLeft: '0px',

		padding: '0px'
	},
	appBarMenu_docked: {
		marginRight: '256px'
	},
	appBarMenu_undocked: {
		marginRight: '0px'
	}
};

var muiTheme = {
	palette: {
		primary1Color: primaryColor
	}

};

function browserSelector(_ref) {
	var browser = _ref.browser;

	return { browser: browser };
};

var App = _wrapComponent('App')(function (_Component) {
	_inherits(App, _Component);

	function App(props) {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			var _props = this.props;
			var appStyle = _props.appStyle;
			var toggleDrawerOpen = _props.toggleDrawerOpen;
			var browser = _props.browser;
			var appBar = _props.appBar;


			var docked = browser.greaterThan.medium ? true : false;

			var contentStyle = docked ? styles.content_docked : styles.content_undocked;
			var appBarStyle = docked ? styles.appBar_docked : styles.appBar_undocked;
			var appBarMenuStyle = docked ? styles.appBarMenu_docked : styles.appBarMenu_undocked;

			return _react3.default.createElement(
				_MuiThemeProvider2.default,
				{ muiTheme: (0, _getMuiTheme2.default)(appStyle.theme.source) },
				_react3.default.createElement(
					'div',
					null,
					_react3.default.createElement(_AppNavDrawer2.default, { location: this.props.location }),
					_react3.default.createElement(
						'div',
						null,
						_react3.default.createElement(
							'div',
							{ style: contentStyle },
							this.props.children
						)
					)
				)
			);
		}
	}]);

	return App;
}(_react2.Component));

App.propTypes = {
	children: _react2.PropTypes.node.isRequired,
	toggleDrawerOpen: _react2.PropTypes.func.isRequired,
	browser: _react2.PropTypes.object.isRequired,
	appStyle: _react2.PropTypes.object.isRequired,
	location: _react2.PropTypes.object.isRequired
};

App.contextTypes = {
	router: _react2.PropTypes.object.isRequired,
	store: _react2.PropTypes.object.isRequired

};

var mapStateToProps = function mapStateToProps(state) {
	var appStyle = state.appStyle;
	var sidebar = state.sidebar;
	var responsiveStateReducer = state.responsiveStateReducer;

	return {
		browser: responsiveStateReducer,
		appStyle: appStyle
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		toggleDrawerOpen: function toggleDrawerOpen() {
			dispatch((0, _appNavDrawer.toggleDrawerOpen)());
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);
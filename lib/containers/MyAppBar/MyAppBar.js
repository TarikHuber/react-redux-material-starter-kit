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

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _appNavDrawer = require('../../actions/appNavDrawer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	MyAppBar: {
		displayName: 'MyAppBar'
	}
};

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: 'src/containers/MyAppBar/MyAppBar.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: 'src/containers/MyAppBar/MyAppBar.js',
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
	appBar: {
		position: 'fixed',
		zIndex: 2,
		zDepth: 2,
		top: 0,
		height: 64
	},
	appBarMenu_docked: {
		marginRight: '256px'
	},
	appBarMenu_undocked: {
		marginRight: '0px'
	}
};

var MyAppBar = _wrapComponent('MyAppBar')(function (_Component) {
	_inherits(MyAppBar, _Component);

	function MyAppBar(props) {
		_classCallCheck(this, MyAppBar);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(MyAppBar).call(this, props));
	}

	_createClass(MyAppBar, [{
		key: 'render',
		value: function render() {
			var _props = this.props;
			var title = _props.title;
			var menu = _props.menu;
			var toggleDrawerOpen = _props.toggleDrawerOpen;
			var browser = _props.browser;


			var docked = browser.greaterThan.medium ? true : false;
			var appBarMenuStyle = docked ? styles.appBarMenu_docked : styles.appBarMenu_undocked;
			var rightMenu = _react3.default.createElement(
				'div',
				{ style: appBarMenuStyle },
				menu
			);

			return _react3.default.createElement(
				'header',
				null,
				_react3.default.createElement(_AppBar2.default, {
					title: title || '',
					onLeftIconButtonTouchTap: function onLeftIconButtonTouchTap() {
						return toggleDrawerOpen();
					},
					zDepth: 1,
					iconElementRight: rightMenu,
					style: styles.appBar,
					showMenuIconButton: !docked
				})
			);
		}
	}]);

	return MyAppBar;
}(_react2.Component));

MyAppBar.propTypes = {
	toggleDrawerOpen: _react2.PropTypes.func.isRequired,
	browser: _react2.PropTypes.object.isRequired,
	title: _react2.PropTypes.string,
	menu: _react2.PropTypes.object
};

var mapStateToProps = function mapStateToProps(state) {
	var responsiveStateReducer = state.responsiveStateReducer;

	return {
		browser: responsiveStateReducer

	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		toggleDrawerOpen: function toggleDrawerOpen() {
			dispatch((0, _appNavDrawer.toggleDrawerOpen)());
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MyAppBar);
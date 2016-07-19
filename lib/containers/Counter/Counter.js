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

var _redux = require('redux');

var _counter = require('../../actions/counter');

var _appNavDrawer = require('../../actions/appNavDrawer');

var _Counter = require('./Counter.i18n');

var _reactIntl = require('react-intl');

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _FloatingActionButton = require('material-ui/FloatingActionButton');

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _add = require('material-ui/svg-icons/content/add');

var _add2 = _interopRequireDefault(_add);

var _remove = require('material-ui/svg-icons/content/remove');

var _remove2 = _interopRequireDefault(_remove);

var _replay = require('material-ui/svg-icons/av/replay');

var _replay2 = _interopRequireDefault(_replay);

var _Activity = require('../../components/Activity/Activity');

var _Activity2 = _interopRequireDefault(_Activity);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _IconButton = require('material-ui/IconButton/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _moreVert = require('material-ui/svg-icons/navigation/more-vert');

var _moreVert2 = _interopRequireDefault(_moreVert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	Counter: {
		displayName: 'Counter'
	}
};

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: 'src/containers/Counter/Counter.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: 'src/containers/Counter/Counter.js',
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

		bottom: 0,
		height: 64,
		margin: '0px'
	},

	left_button: {
		position: 'fixed',
		zIndex: 3,
		right: 230,
		bottom: 35
	},

	middle_button: {
		position: 'fixed',
		zIndex: 3,
		right: 130,
		bottom: 35
	},

	right_button: {
		position: 'fixed',
		zIndex: 3,
		right: 30,
		bottom: 35
	},

	main_container: {
		float: 'left',
		position: 'relative',
		left: '50%',
		marginTop: '100px'
	},

	fixer_container: {
		float: 'left',
		position: 'relative',
		left: '-50%'
	},

	txt_number: {
		fontSize: 80
	}

};

var Counter = _wrapComponent('Counter')(function (_Component) {
	_inherits(Counter, _Component);

	function Counter(props) {
		_classCallCheck(this, Counter);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Counter).call(this, props));
	}

	_createClass(Counter, [{
		key: 'render',
		value: function render() {
			var _props = this.props;
			var intl = _props.intl;
			var onReset = _props.onReset;
			var theme = _props.theme;
			var value = _props.value;
			var onIncrement = _props.onIncrement;
			var onDecrement = _props.onDecrement;
			var locale = _props.locale;


			var menu = _react3.default.createElement(
				_IconMenu2.default,
				{
					iconButtonElement: _react3.default.createElement(
						_IconButton2.default,
						null,
						_react3.default.createElement(_moreVert2.default, { color: 'white' })
					),
					targetOrigin: { horizontal: 'right', vertical: 'top' },
					anchorOrigin: { horizontal: 'right', vertical: 'top' }

				},
				_react3.default.createElement(_MenuItem2.default, { primaryText: 'Reset', onTouchTap: onReset }),
				_react3.default.createElement(_MenuItem2.default, { primaryText: 'Increment', onTouchTap: onIncrement }),
				_react3.default.createElement(_MenuItem2.default, { primaryText: 'Decrement', onTouchTap: onDecrement })
			);

			return _react3.default.createElement(
				_Activity2.default,
				{ title: intl.messages.counter, nav_index: '/counter', menu: menu },
				_react3.default.createElement(
					'div',
					null,
					_react3.default.createElement(
						'div',
						{ style: styles.main_container },
						_react3.default.createElement(
							'div',
							{ style: styles.fixer_container },
							_react3.default.createElement(
								'h1',
								{ style: styles.txt_number },
								value
							)
						)
					),
					_react3.default.createElement(
						_FloatingActionButton2.default,
						{
							secondary: true,
							style: styles.left_button,
							onTouchTap: onDecrement
						},
						_react3.default.createElement(_remove2.default, null)
					),
					_react3.default.createElement(
						_FloatingActionButton2.default,
						{
							secondary: true,
							style: styles.middle_button,
							onTouchTap: onReset
						},
						_react3.default.createElement(_replay2.default, null)
					),
					_react3.default.createElement(
						_FloatingActionButton2.default,
						{
							secondary: true,
							style: styles.right_button,
							onTouchTap: onIncrement
						},
						_react3.default.createElement(_add2.default, null)
					),
					_react3.default.createElement(_AppBar2.default, {

						style: styles.appBar,
						iconElementLeft: _react3.default.createElement('div', null)

					})
				)
			);
		}
	}]);

	return Counter;
}(_react2.Component));

Counter.propTypes = {
	value: _react2.PropTypes.number.isRequired,
	onIncrement: _react2.PropTypes.func.isRequired,
	onDecrement: _react2.PropTypes.func.isRequired,
	onReset: _react2.PropTypes.func.isRequired,
	setAppBarTitle: _react2.PropTypes.func.isRequired,
	setAppBarIconElementRight: _react2.PropTypes.func.isRequired,
	setSelectedIndex: _react2.PropTypes.func.isRequired,
	theme: _react2.PropTypes.object.isRequired,
	intl: _react2.PropTypes.object.isRequired
};

function mapStateToProps(state) {
	var intl = state.intl;
	var appNavDrawer = state.appNavDrawer;
	var appStyle = state.appStyle;
	var counter = state.counter;
	var locale = state.locale;


	return {
		value: counter,
		theme: appStyle.theme,
		appNavDrawer: appNavDrawer,
		intl: intl
	};
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		onIncrement: function onIncrement() {
			dispatch((0, _counter.onIncrement)());
		},
		onDecrement: function onDecrement() {
			dispatch((0, _counter.onDecrement)());
		},
		onReset: function onReset() {
			dispatch((0, _counter.onReset)());
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
		setAppBarIconElementRight: function (_setAppBarIconElementRight) {
			function setAppBarIconElementRight(_x2) {
				return _setAppBarIconElementRight.apply(this, arguments);
			}

			setAppBarIconElementRight.toString = function () {
				return _setAppBarIconElementRight.toString();
			};

			return setAppBarIconElementRight;
		}(function (element) {
			dispatch(setAppBarIconElementRight(element));
		}),
		setSelectedIndex: function setSelectedIndex(index) {
			dispatch((0, _appNavDrawer.setSelectedIndex)(index));
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Counter);
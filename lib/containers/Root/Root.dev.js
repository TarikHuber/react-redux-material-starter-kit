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

var _routes = require('../../routes');

var _routes2 = _interopRequireDefault(_routes);

var _reactRouter = require('react-router');

var _reactIntl = require('react-intl');

var _DevTools = require('../../containers/DevTools/DevTools');

var _DevTools2 = _interopRequireDefault(_DevTools);

var _en = require('react-intl/locale-data/en');

var _en2 = _interopRequireDefault(_en);

var _de = require('react-intl/locale-data/de');

var _de2 = _interopRequireDefault(_de);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	Root: {
		displayName: 'Root'
	}
};

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: 'src/containers/Root/Root.dev.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: 'src/containers/Root/Root.dev.js',
	components: _components,
	locals: [],
	imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2(_varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	};
}

var Root = _wrapComponent('Root')(function (_Component) {
	_inherits(Root, _Component);

	function Root() {
		_classCallCheck(this, Root);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Root).apply(this, arguments));
	}

	_createClass(Root, [{
		key: 'render',
		value: function render() {
			var _props = this.props;
			var store = _props.store;
			var history = _props.history;


			(0, _reactIntl.addLocaleData)([].concat(_toConsumableArray(_en2.default), _toConsumableArray(_de2.default)));

			var mapStateToProps = function mapStateToProps(state) {
				var intl = state.intl;

				return _extends({}, intl, {
					key: intl.locale
				});
			};

			var ConnectedIntlProvider = (0, _reactRedux.connect)(mapStateToProps)(_reactIntl.IntlProvider);

			return _react3.default.createElement(
				_reactRedux.Provider,
				{ store: store },
				_react3.default.createElement(
					ConnectedIntlProvider,
					null,
					_react3.default.createElement(
						'div',
						null,
						_react3.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: _routes2.default })
					)
				)
			);
		}
	}]);

	return Root;
}(_react2.Component));

exports.default = Root;


Root.propTypes = {
	store: _react2.PropTypes.object.isRequired,
	history: _react2.PropTypes.object.isRequired
};
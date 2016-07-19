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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	PropsExample: {
		displayName: 'PropsExample'
	}
};

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: 'src/components/BasicExamples/PropsExample.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: 'src/components/BasicExamples/PropsExample.js',
	components: _components,
	locals: [],
	imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2(_varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	};
}

var PropsExample = _wrapComponent('PropsExample')(function (_Component) {
	_inherits(PropsExample, _Component);

	function PropsExample(props) {
		_classCallCheck(this, PropsExample);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(PropsExample).call(this, props));
	}

	_createClass(PropsExample, [{
		key: 'render',
		value: function render() {
			var intl = this.props.intl;


			return _react3.default.createElement(
				'div',
				null,
				_react3.default.createElement(
					'h3',
					null,
					'Props Example'
				),
				_react3.default.createElement(
					'p',
					null,
					'This example demonstartes how to use a react component with props.'
				),
				_react3.default.createElement(
					'p',
					null,
					'Because we use redux the state is immutable. To get a state value we use redux connect.'
				),
				_react3.default.createElement(
					'p',
					null,
					'And the prop that we us in this componente is intl where we get the locale value:'
				),
				_react3.default.createElement(
					'h4',
					null,
					intl.locale
				),
				_react3.default.createElement(
					'p',
					null,
					'If you change the language in the settings the value abow would also change.'
				)
			);
		}
	}]);

	return PropsExample;
}(_react2.Component));

;

PropsExample.propTypes = {
	intl: _react2.PropTypes.object.isRequired
};

function mapStateToProps(state) {
	var intl = state.intl;


	return {
		intl: intl
	};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PropsExample);
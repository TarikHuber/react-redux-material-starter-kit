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

var _reduxTitle = require('redux-title');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	PropsAndDispatchExample: {
		displayName: 'PropsAndDispatchExample'
	}
};

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: 'src/components/BasicExamples/PropsAndDispatchExample.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: 'src/components/BasicExamples/PropsAndDispatchExample.js',
	components: _components,
	locals: [],
	imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2(_varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	};
}

var PropsAndDispatchExample = _wrapComponent('PropsAndDispatchExample')(function (_Component) {
	_inherits(PropsAndDispatchExample, _Component);

	function PropsAndDispatchExample(props) {
		_classCallCheck(this, PropsAndDispatchExample);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(PropsAndDispatchExample).call(this, props));
	}

	_createClass(PropsAndDispatchExample, [{
		key: 'render',
		value: function render() {
			var _props = this.props;
			var title = _props.title;
			var updateTitle = _props.updateTitle;


			function handleClick() {

				updateTitle(Math.random().toString(36).substr(2));
			}

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
					'This example demonstartes how to use a react component with props and dispatches.'
				),
				_react3.default.createElement(
					'p',
					null,
					'Like the props we connect the dispatches using redux connect.'
				),
				_react3.default.createElement(
					'p',
					null,
					'We now show the title of the application that is synced with the state:'
				),
				_react3.default.createElement(
					'h4',
					null,
					title
				),
				_react3.default.createElement(
					'button',
					{ onClick: handleClick },
					'Change'
				),
				_react3.default.createElement(
					'p',
					null,
					'By pressing the button we change the title to a random generated string.'
				)
			);
		}
	}]);

	return PropsAndDispatchExample;
}(_react2.Component));

;

PropsAndDispatchExample.propTypes = {
	title: _react2.PropTypes.string.isRequired,
	updateTitle: _react2.PropTypes.func.isRequired
};

function mapStateToProps(state) {
	var title = state.title;


	return {
		title: title
	};
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		updateTitle: function updateTitle(title) {
			dispatch((0, _reduxTitle.updateTitle)(title));
		}

	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PropsAndDispatchExample);
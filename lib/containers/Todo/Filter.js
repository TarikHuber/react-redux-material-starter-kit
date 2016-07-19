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

var _todo = require('../../actions/todo');

var _todoDialog = require('../../actions/todoDialog');

var _reactIntl = require('react-intl');

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Todo = require('./Todo.i18n');

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _IconButton = require('material-ui/IconButton/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _moreVert = require('material-ui/svg-icons/navigation/more-vert');

var _moreVert2 = _interopRequireDefault(_moreVert);

var _filterList = require('material-ui/svg-icons/content/filter-list');

var _filterList2 = _interopRequireDefault(_filterList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	Filter: {
		displayName: 'Filter'
	}
};

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: 'src/containers/Todo/Filter.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: 'src/containers/Todo/Filter.js',
	components: _components,
	locals: [],
	imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2(_varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	};
}

var Filter = _wrapComponent('Filter')(function (_Component) {
	_inherits(Filter, _Component);

	function Filter(props) {
		_classCallCheck(this, Filter);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Filter).call(this, props));
	}

	_createClass(Filter, [{
		key: 'render',
		value: function render() {
			var _props = this.props;
			var visibilityFilter = _props.visibilityFilter;
			var todoDialog = _props.todoDialog;
			var setVisibilityFilter = _props.setVisibilityFilter;
			var addTodo = _props.addTodo;
			var setErrorText = _props.setErrorText;


			function handleChangeSingle(event, value) {
				setVisibilityFilter(value);
			};

			return _react3.default.createElement(
				_IconMenu2.default,
				{
					iconButtonElement: _react3.default.createElement(
						_IconButton2.default,
						null,
						_react3.default.createElement(_filterList2.default, { color: 'white' })
					),
					onChange: handleChangeSingle,
					value: visibilityFilter,
					multiple: false
				},
				_react3.default.createElement(_MenuItem2.default, { value: 'SHOW_ALL', primaryText: _react3.default.createElement(_reactIntl.FormattedMessage, _Todo.messages.filter.all) }),
				_react3.default.createElement(_MenuItem2.default, { value: 'SHOW_COMPLETED', primaryText: _react3.default.createElement(_reactIntl.FormattedMessage, _Todo.messages.filter.completed) }),
				_react3.default.createElement(_MenuItem2.default, { value: 'SHOW_ACTIVE', primaryText: _react3.default.createElement(_reactIntl.FormattedMessage, _Todo.messages.filter.active) })
			);
		}
	}]);

	return Filter;
}(_react2.Component));

Filter.propTypes = {

	todoDialog: _react2.PropTypes.object.isRequired,
	setVisibilityFilter: _react2.PropTypes.func.isRequired,
	addTodo: _react2.PropTypes.func.isRequired,
	setErrorText: _react2.PropTypes.func.isRequired,
	visibilityFilter: _react2.PropTypes.string.isRequired
};

function mapStateToProps(state) {
	var visibilityFilter = state.visibilityFilter;
	var todoDialog = state.todoDialog;


	return {
		todoDialog: todoDialog,
		visibilityFilter: visibilityFilter
	};
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		setVisibilityFilter: function setVisibilityFilter(filter) {
			dispatch((0, _todo.setVisibilityFilter)(filter));
		},
		addTodo: function addTodo(text) {
			dispatch((0, _todo.addTodo)(text));
		},
		setErrorText: function setErrorText(text) {
			dispatch((0, _todoDialog.setErrorText)(text));
		}

	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Filter);
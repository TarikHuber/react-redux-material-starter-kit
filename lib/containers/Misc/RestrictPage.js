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

var _reactRouterRedux = require('react-router-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  RestrictPage: {
    displayName: 'RestrictPage'
  }
};

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/containers/Misc/RestrictPage.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/containers/Misc/RestrictPage.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2(_varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var RestrictPage = _wrapComponent('RestrictPage')(function (_Component) {
  _inherits(RestrictPage, _Component);

  function RestrictPage() {
    _classCallCheck(this, RestrictPage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(RestrictPage).apply(this, arguments));
  }

  _createClass(RestrictPage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props;
      var auth = _props.auth;
      var to = _props.to;


      if (auth.apiToken === undefined) {
        this.props.to('/signin?redirect=' + this.props.location.pathname);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var auth = this.props.auth;

      if (auth.apiToken !== undefined) {
        return this.props.children;
      }

      return null;
    }
  }]);

  return RestrictPage;
}(_react2.Component));

RestrictPage.propTypes = {
  auth: _react2.PropTypes.object,
  children: _react2.PropTypes.object,
  location: _react2.PropTypes.object,
  to: _react2.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  var auth = state.auth;


  return { auth: auth };
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    to: function to(path) {
      dispatch((0, _reactRouterRedux.push)(path));
    }

  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RestrictPage);
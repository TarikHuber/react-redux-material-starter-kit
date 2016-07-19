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

var _Activity = require('../../components/Activity/Activity');

var _Activity2 = _interopRequireDefault(_Activity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Responsive: {
    displayName: 'Responsive'
  }
};

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/containers/Responsive/Responsive.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/containers/Responsive/Responsive.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformHmrLibIndexJs2(_varSrvDomainsSmartscanServicesWwwHtdocsRrmNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

function browserSelector(_ref) {
  var browser = _ref.browser;

  return { browser: browser };
}

var Responsive = _wrapComponent('Responsive')(function (_Component) {
  _inherits(Responsive, _Component);

  function Responsive(props) {
    _classCallCheck(this, Responsive);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Responsive).call(this, props));
  }

  _createClass(Responsive, [{
    key: 'render',
    value: function render() {
      var browser = this.props.browser;


      var message = 'The viewport\'s current media type is: ' + browser.mediaType + '.';

      if (browser.lessThan.small) {
        message += 'Secret message for viewports smaller than than the "small" breakpoint!';
      } else if (browser.lessThan.medium) {
        message += 'Secret message for viewports between the "small" and "medium" breakpoints!';
      } else {
        message += 'Message for viewports greater than the "medium" breakpoint.';
      }

      return _react3.default.createElement(
        _Activity2.default,
        { title: 'Responsive', nav_index: '/responsive' },
        _react3.default.createElement(
          'p',
          null,
          message
        )
      );
    }
  }]);

  return Responsive;
}(_react2.Component));

Responsive.propTypes = {
  browser: _react2.PropTypes.object.isRequired

};

function mapStateToProps(state) {
  var responsiveStateReducer = state.responsiveStateReducer;


  return {

    browser: responsiveStateReducer
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Responsive);
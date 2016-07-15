'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // @noflow
// Intentional; Flow can't handle the bind on L20


/*
 * A simple HOC that provides facility for listening to container resizes.
 */
/*:: type State = {
  mounted: boolean,
  width: number
};*/

exports.default = function (ComposedComponent /*: ReactClass*/) /*: ReactClass*/ {
  var _class, _temp2;

  return _temp2 = _class = function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class() {
      var _temp, _this, _ret;

      _classCallCheck(this, _class);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
        mounted: false,
        width: 1280
      }, _this.onWindowResize = function (_event /*: Event*/, cb /*: ?Function*/) {
        var node = _reactDom2.default.findDOMNode(_this);
        _this.setState({ width: node.offsetWidth }, cb);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _class.prototype.componentDidMount = function componentDidMount() {
      this.setState({ mounted: true });

      window.addEventListener('resize', this.onWindowResize);
      // Call to properly set the breakpoint and resize the elements.
      // Note that if you're doing a full-width element, this can get a little wonky if a scrollbar
      // appears because of the grid. In that case, fire your own resize event, or set `overflow: scroll` on your body.
      this.onWindowResize();
    };

    _class.prototype.componentWillUnmount = function componentWillUnmount() {
      window.removeEventListener('resize', this.onWindowResize);
    };

    _class.prototype.render = function render() {
      if (this.props.measureBeforeMount && !this.state.mounted) return _react2.default.createElement('div', _extends({}, this.props, this.state));
      return _react2.default.createElement(ComposedComponent, _extends({}, this.props, this.state));
    };

    return _class;
  }(_react2.default.Component), _class.defaultProps = {
    measureBeforeMount: false
  }, _class.propTypes = {
    // If true, will not render children until mounted. Useful for getting the exact width before
    // rendering, to prevent any unsightly resizing.
    measureBeforeMount: _react2.default.PropTypes.bool
  }, _temp2;
};
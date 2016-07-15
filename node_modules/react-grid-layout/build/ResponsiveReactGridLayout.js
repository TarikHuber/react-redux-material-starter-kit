'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash.isequal');

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = require('./utils');

var _responsiveUtils = require('./responsiveUtils');

var _ReactGridLayout = require('./ReactGridLayout');

var _ReactGridLayout2 = _interopRequireDefault(_ReactGridLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop() {};

/*:: import type {Layout} from './utils';*/
/*:: type State = {
  layout: Layout,
  breakpoint: string,
  cols: number
};*/

var ResponsiveReactGridLayout = function (_React$Component) {
  _inherits(ResponsiveReactGridLayout, _React$Component);

  function ResponsiveReactGridLayout() {
    var _temp, _this, _ret;

    _classCallCheck(this, ResponsiveReactGridLayout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = _this.generateInitialState(), _this.onLayoutChange = function (layout) {
      var _extends2;

      _this.props.onLayoutChange(layout, _extends({}, _this.props.layouts, (_extends2 = {}, _extends2[_this.state.breakpoint] = layout, _extends2)));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // This should only include propTypes needed in this code; RGL itself
  // will do validation of the rest props passed to it.


  ResponsiveReactGridLayout.prototype.generateInitialState = function generateInitialState() {
    var _props = this.props;
    var width = _props.width;
    var breakpoints = _props.breakpoints;
    var layouts = _props.layouts;
    var verticalCompact = _props.verticalCompact;
    var cols = _props.cols;

    var breakpoint = (0, _responsiveUtils.getBreakpointFromWidth)(breakpoints, width);
    var colNo = (0, _responsiveUtils.getColsFromBreakpoint)(breakpoint, cols);
    // Get the initial layout. This can tricky; we try to generate one however possible if one doesn't exist
    // for this layout.
    var initialLayout = (0, _responsiveUtils.findOrGenerateResponsiveLayout)(layouts, breakpoints, breakpoint, breakpoint, colNo, verticalCompact);

    return {
      layout: initialLayout,
      breakpoint: breakpoint,
      cols: colNo
    };
  };

  ResponsiveReactGridLayout.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps /*: Object*/) {

    // Allow parent to set width or breakpoint directly.
    if (nextProps.width != this.props.width || nextProps.breakpoint !== this.props.breakpoint || !(0, _lodash2.default)(nextProps.breakpoints, this.props.breakpoints) || !(0, _lodash2.default)(nextProps.cols, this.props.cols)) {
      this.onWidthChange(nextProps);
    }

    // Allow parent to set layouts directly.
    else if (!(0, _lodash2.default)(nextProps.layouts, this.props.layouts)) {
        var _state = this.state;
        var _breakpoint = _state.breakpoint;
        var _cols = _state.cols;

        // Since we're setting an entirely new layout object, we must generate a new responsive layout
        // if one does not exist.

        var newLayout = (0, _responsiveUtils.findOrGenerateResponsiveLayout)(nextProps.layouts, nextProps.breakpoints, _breakpoint, _breakpoint, _cols, nextProps.verticalLayout);
        this.setState({ layout: newLayout });
      }
  };

  // wrap layouts so we do not need to pass layouts to child


  /**
   * When the width changes work through breakpoints and reset state with the new width & breakpoint.
   * Width changes are necessary to figure out the widget widths.
   */

  ResponsiveReactGridLayout.prototype.onWidthChange = function onWidthChange(nextProps /*: typeof ResponsiveReactGridLayout.prototype.props*/) {
    var breakpoints = nextProps.breakpoints;
    var verticalLayout = nextProps.verticalLayout;
    var verticalCompact = nextProps.verticalCompact;
    var cols = nextProps.cols;

    var newBreakpoint = nextProps.breakpoint || (0, _responsiveUtils.getBreakpointFromWidth)(nextProps.breakpoints, nextProps.width);

    var lastBreakpoint = this.state.breakpoint;

    // Breakpoint change
    if (lastBreakpoint !== newBreakpoint || this.props.breakpoints !== breakpoints || this.props.cols !== cols) {

      // Store the current layout
      var layouts = nextProps.layouts;
      layouts[lastBreakpoint] = (0, _utils.cloneLayout)(this.state.layout);

      // Find or generate a new one.
      var newCols /*: number*/ = (0, _responsiveUtils.getColsFromBreakpoint)(newBreakpoint, cols);
      var _layout = (0, _responsiveUtils.findOrGenerateResponsiveLayout)(layouts, breakpoints, newBreakpoint, lastBreakpoint, newCols, verticalLayout);

      // This adds missing items.
      _layout = (0, _utils.synchronizeLayoutWithChildren)(_layout, nextProps.children, newCols, verticalCompact);

      // Store this new layout as well.
      layouts[newBreakpoint] = _layout;

      // callbacks
      this.props.onLayoutChange(_layout, layouts);
      this.props.onBreakpointChange(newBreakpoint, newCols);
      this.props.onWidthChange(nextProps.width, nextProps.margin, newCols);

      this.setState({ breakpoint: newBreakpoint, layout: _layout, cols: newCols });
    }
  };

  ResponsiveReactGridLayout.prototype.render = function render() {
    var _props2 = this.props;
    var breakpoint = _props2.breakpoint;
    var breakpoints = _props2.breakpoints;
    var cols = _props2.cols;
    var layouts = _props2.layouts;
    var onBreakpointChange = _props2.onBreakpointChange;
    var onLayoutChange = _props2.onLayoutChange;
    var onWidthChange = _props2.onWidthChange;

    var other = _objectWithoutProperties(_props2, ['breakpoint', 'breakpoints', 'cols', 'layouts', 'onBreakpointChange', 'onLayoutChange', 'onWidthChange']);

    return _react2.default.createElement(_ReactGridLayout2.default, _extends({}, other, {
      onLayoutChange: this.onLayoutChange,
      layout: this.state.layout,
      cols: this.state.cols
    }));
  };

  return ResponsiveReactGridLayout;
}(_react2.default.Component);

ResponsiveReactGridLayout.propTypes = {

  //
  // Basic props
  //

  // Optional, but if you are managing width yourself you may want to set the breakpoint
  // yourself as well.
  breakpoint: _react2.default.PropTypes.string,

  // {name: pxVal}, e.g. {lg: 1200, md: 996, sm: 768, xs: 480}
  breakpoints: _react2.default.PropTypes.object,

  // # of cols. This is a breakpoint -> cols map
  cols: _react2.default.PropTypes.object,

  // layouts is an object mapping breakpoints to layouts.
  // e.g. {lg: Layout, md: Layout, ...}
  layouts: function layouts(props) {
    _react2.default.PropTypes.object.isRequired.apply(this, arguments);
    Object.keys(props.layouts).forEach(function (key) {
      return (0, _utils.validateLayout)(props.layouts[key], 'layouts.' + key);
    });
  },

  // The width of this component.
  // Required in this propTypes stanza because generateInitialState() will fail without it.
  width: _react2.default.PropTypes.number.isRequired,

  //
  // Callbacks
  //

  // Calls back with breakpoint and new # cols
  onBreakpointChange: _react2.default.PropTypes.func,

  // Callback so you can save the layout.
  // Calls back with (currentLayout, allLayouts). allLayouts are keyed by breakpoint.
  onLayoutChange: _react2.default.PropTypes.func,

  // Calls back with (containerWidth, margin, cols)
  onWidthChange: _react2.default.PropTypes.func
};
ResponsiveReactGridLayout.defaultProps = {
  breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
  cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  layouts: {},
  onBreakpointChange: noop,
  onLayoutChange: noop,
  onWidthChange: noop
};
exports.default = ResponsiveReactGridLayout;
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash.isequal');

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = require('./utils');

var _GridItem = require('./GridItem');

var _GridItem2 = _interopRequireDefault(_GridItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop() {};

// Types
/*:: import type {ResizeEvent, DragEvent, Layout, LayoutItem} from './utils';*/

// End Types

/**
 * A reactive, fluid grid layout with draggable, resizable components.
 */

/*:: type State = {
  activeDrag: ?LayoutItem,
  layout: Layout,
  mounted: boolean,
  oldDragItem: ?LayoutItem,
  oldResizeItem: ?LayoutItem
};*/

var ReactGridLayout = function (_React$Component) {
  _inherits(ReactGridLayout, _React$Component);

  // TODO publish internal ReactClass displayName transform

  function ReactGridLayout(props /*: typeof ReactGridLayout.prototype.props*/, context /*: any*/) /*: void*/ {
    _classCallCheck(this, ReactGridLayout);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _initialiseProps.call(_this);

    (0, _utils.autoBindHandlers)(_this, ['onDragStart', 'onDrag', 'onDragStop', 'onResizeStart', 'onResize', 'onResizeStop']);
    return _this;
  }

  ReactGridLayout.prototype.componentDidMount = function componentDidMount() {
    this.setState({ mounted: true });
    // Call back with layout on mount. This should be done after correcting the layout width
    // to ensure we don't rerender with the wrong width.
    this.props.onLayoutChange(this.state.layout);
  };

  ReactGridLayout.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps /*: typeof ReactGridLayout.prototype.props*/) {
    var newLayoutBase = void 0;
    // Allow parent to set layout directly.
    if (!(0, _lodash2.default)(nextProps.layout, this.props.layout)) {
      newLayoutBase = nextProps.layout;
    }

    // If children change, also regenerate the layout. Use our state
    // as the base in case because it may be more up to date than
    // what is in props.
    else if (nextProps.children.length !== this.props.children.length) {
        newLayoutBase = this.state.layout;
      }

    // We need to regenerate the layout.
    if (newLayoutBase) {
      var newLayout = (0, _utils.synchronizeLayoutWithChildren)(newLayoutBase, nextProps.children, nextProps.cols, nextProps.verticalCompact);
      this.setState({ layout: newLayout });
      this.props.onLayoutChange(newLayout);
    }
  };

  /**
   * Calculates a pixel value for the container.
   * @return {String} Container height in pixels.
   */


  ReactGridLayout.prototype.containerHeight = function containerHeight() {
    if (!this.props.autoSize) return;
    return (0, _utils.bottom)(this.state.layout) * (this.props.rowHeight + this.props.margin[1]) + this.props.margin[1] + 'px';
  };

  /**
   * When dragging starts
   * @param {String} i Id of the child
   * @param {Number} x X position of the move
   * @param {Number} y Y position of the move
   * @param {Event} e The mousedown event
   * @param {Element} node The current dragging DOM element
   */


  ReactGridLayout.prototype.onDragStart = function onDragStart(i /*:string*/, x /*:number*/, y /*:number*/, _ref) {
    var e = _ref.e;
    var node = _ref.node;
    var layout = this.state.layout;

    var l = (0, _utils.getLayoutItem)(layout, i);
    if (!l) return;

    this.setState({ oldDragItem: (0, _utils.cloneLayoutItem)(l) });

    this.props.onDragStart(layout, l, l, null, e, node);
  };

  /**
   * Each drag movement create a new dragelement and move the element to the dragged location
   * @param {String} i Id of the child
   * @param {Number} x X position of the move
   * @param {Number} y Y position of the move
   * @param {Event} e The mousedown event
   * @param {Element} node The current dragging DOM element
   */


  ReactGridLayout.prototype.onDrag = function onDrag(i /*:string*/, x /*:number*/, y /*:number*/, _ref2) {
    var e = _ref2.e;
    var node = _ref2.node;
    var oldDragItem = this.state.oldDragItem;
    var layout = this.state.layout;

    var l = (0, _utils.getLayoutItem)(layout, i);
    if (!l) return;

    // Create placeholder (display only)
    var placeholder = {
      w: l.w, h: l.h, x: l.x, y: l.y, placeholder: true, i: i
    };

    // Move the element to the dragged location.
    layout = (0, _utils.moveElement)(layout, l, x, y, true /* isUserAction */);

    this.props.onDrag(layout, oldDragItem, l, placeholder, e, node);

    this.setState({
      layout: (0, _utils.compact)(layout, this.props.verticalCompact),
      activeDrag: placeholder
    });
  };

  /**
   * When dragging stops, figure out which position the element is closest to and update its x and y.
   * @param  {String} i Index of the child.
   * @param {Number} x X position of the move
   * @param {Number} y Y position of the move
   * @param {Event} e The mousedown event
   * @param {Element} node The current dragging DOM element
   */


  ReactGridLayout.prototype.onDragStop = function onDragStop(i /*:string*/, x /*:number*/, y /*:number*/, _ref3) {
    var e = _ref3.e;
    var node = _ref3.node;
    var oldDragItem = this.state.oldDragItem;
    var layout = this.state.layout;

    var l = (0, _utils.getLayoutItem)(layout, i);
    if (!l) return;

    // Move the element here
    layout = (0, _utils.moveElement)(layout, l, x, y, true /* isUserAction */);

    this.props.onDragStop(layout, oldDragItem, l, null, e, node);

    // Set state
    this.setState({
      activeDrag: null,
      layout: (0, _utils.compact)(layout, this.props.verticalCompact),
      oldDragItem: null
    });

    this.props.onLayoutChange(this.state.layout);
  };

  ReactGridLayout.prototype.onResizeStart = function onResizeStart(i /*:string*/, w /*:number*/, h /*:number*/, _ref4) {
    var e = _ref4.e;
    var node = _ref4.node;
    var layout = this.state.layout;

    var l = (0, _utils.getLayoutItem)(layout, i);
    if (!l) return;

    this.setState({ oldResizeItem: (0, _utils.cloneLayoutItem)(l) });

    this.props.onResizeStart(layout, l, l, null, e, node);
  };

  ReactGridLayout.prototype.onResize = function onResize(i /*:string*/, w /*:number*/, h /*:number*/, _ref5) {
    var e = _ref5.e;
    var node = _ref5.node;
    var _state = this.state;
    var layout = _state.layout;
    var oldResizeItem = _state.oldResizeItem;

    var l = (0, _utils.getLayoutItem)(layout, i);
    if (!l) return;

    // Set new width and height.
    l.w = w;
    l.h = h;

    // Create placeholder element (display only)
    var placeholder = {
      w: w, h: h, x: l.x, y: l.y, static: true, i: i
    };

    this.props.onResize(layout, oldResizeItem, l, placeholder, e, node);

    // Re-compact the layout and set the drag placeholder.
    this.setState({ layout: (0, _utils.compact)(layout, this.props.verticalCompact), activeDrag: placeholder });
  };

  ReactGridLayout.prototype.onResizeStop = function onResizeStop(i /*:string*/, w /*:number*/, h /*:number*/, _ref6) {
    var e = _ref6.e;
    var node = _ref6.node;
    var _state2 = this.state;
    var layout = _state2.layout;
    var oldResizeItem = _state2.oldResizeItem;

    var l = (0, _utils.getLayoutItem)(layout, i);

    this.props.onResizeStop(layout, oldResizeItem, l, null, e, node);

    // Set state
    this.setState({
      activeDrag: null,
      layout: (0, _utils.compact)(layout, this.props.verticalCompact),
      oldResizeItem: null
    });

    this.props.onLayoutChange(this.state.layout);
  };

  /**
   * Create a placeholder object.
   * @return {Element} Placeholder div.
   */


  ReactGridLayout.prototype.placeholder = function placeholder() {
    var activeDrag = this.state.activeDrag;

    if (!activeDrag) return null;
    var _props = this.props;
    var width = _props.width;
    var cols = _props.cols;
    var margin = _props.margin;
    var rowHeight = _props.rowHeight;
    var maxRows = _props.maxRows;
    var useCSSTransforms = _props.useCSSTransforms;

    // {...this.state.activeDrag} is pretty slow, actually

    return _react2.default.createElement(
      _GridItem2.default,
      {
        w: activeDrag.w,
        h: activeDrag.h,
        x: activeDrag.x,
        y: activeDrag.y,
        i: activeDrag.i,
        className: 'react-grid-placeholder',
        containerWidth: width,
        cols: cols,
        margin: margin,
        maxRows: maxRows,
        rowHeight: rowHeight,
        isDraggable: false,
        isResizable: false,
        useCSSTransforms: useCSSTransforms },
      _react2.default.createElement('div', null)
    );
  };

  /**
   * Given a grid item, set its style attributes & surround in a <Draggable>.
   * @param  {Element} child React element.
   * @return {Element}       Element wrapped in draggable and properly placed.
   */


  ReactGridLayout.prototype.processGridItem = function processGridItem(child /*: React.Element*/) {
    if (!child.key) return;
    var l = (0, _utils.getLayoutItem)(this.state.layout, child.key);
    if (!l) return null;
    var _props2 = this.props;
    var width = _props2.width;
    var cols = _props2.cols;
    var margin = _props2.margin;
    var rowHeight = _props2.rowHeight;
    var maxRows = _props2.maxRows;
    var isDraggable = _props2.isDraggable;
    var isResizable = _props2.isResizable;
    var useCSSTransforms = _props2.useCSSTransforms;
    var draggableCancel = _props2.draggableCancel;
    var draggableHandle = _props2.draggableHandle;
    var mounted = this.state.mounted;

    // Parse 'static'. Any properties defined directly on the grid item will take precedence.

    var draggable = Boolean(!l.static && isDraggable && (l.isDraggable || l.isDraggable == null));
    var resizable = Boolean(!l.static && isResizable && (l.isResizable || l.isResizable == null));

    return _react2.default.createElement(
      _GridItem2.default,
      {
        containerWidth: width,
        cols: cols,
        margin: margin,
        maxRows: maxRows,
        rowHeight: rowHeight,
        cancel: draggableCancel,
        handle: draggableHandle,
        onDragStop: this.onDragStop,
        onDragStart: this.onDragStart,
        onDrag: this.onDrag,
        onResizeStart: this.onResizeStart,
        onResize: this.onResize,
        onResizeStop: this.onResizeStop,
        isDraggable: draggable,
        isResizable: resizable,
        useCSSTransforms: useCSSTransforms && mounted,
        usePercentages: !mounted,

        w: l.w,
        h: l.h,
        x: l.x,
        y: l.y,
        i: l.i,
        minH: l.minH,
        minW: l.minW,
        maxH: l.maxH,
        maxW: l.maxW,
        'static': l.static
      },
      child
    );
  };

  ReactGridLayout.prototype.render = function render() {
    var _this2 = this;

    var _props3 = this.props;
    var className = _props3.className;
    var style = _props3.style;


    var mergedClassName = 'react-grid-layout ' + className;
    var mergedStyle = _extends({
      height: this.containerHeight()
    }, style);

    return _react2.default.createElement(
      'div',
      { className: mergedClassName, style: mergedStyle },
      _react2.default.Children.map(this.props.children, function (child) {
        return _this2.processGridItem(child);
      }),
      this.placeholder()
    );
  };

  return ReactGridLayout;
}(_react2.default.Component);

ReactGridLayout.displayName = "ReactGridLayout";
ReactGridLayout.propTypes = {
  //
  // Basic props
  //
  className: _react.PropTypes.string,
  style: _react.PropTypes.object,

  // This can be set explicitly. If it is not set, it will automatically
  // be set to the container width. Note that resizes will *not* cause this to adjust.
  // If you need that behavior, use WidthProvider.
  width: _react.PropTypes.number,

  // If true, the container height swells and contracts to fit contents
  autoSize: _react.PropTypes.bool,
  // # of cols.
  cols: _react.PropTypes.number,

  // A selector that will not be draggable.
  draggableCancel: _react.PropTypes.string,
  // A selector for the draggable handler
  draggableHandle: _react.PropTypes.string,

  // If true, the layout will compact vertically
  verticalCompact: _react.PropTypes.bool,

  // layout is an array of object with the format:
  // {x: Number, y: Number, w: Number, h: Number, i: String}
  layout: function layout(props) {
    var layout = props.layout;
    // I hope you're setting the _grid property on the grid items
    if (layout === undefined) return;
    (0, _utils.validateLayout)(layout, 'layout');
  },

  //
  // Grid Dimensions
  //

  // Margin between items [x, y] in px
  margin: _react.PropTypes.arrayOf(_react.PropTypes.number),
  // Rows have a static height, but you can change this based on breakpoints if you like
  rowHeight: _react.PropTypes.number,
  // Default Infinity, but you can specify a max here if you like.
  // Note that this isn't fully fleshed out and won't error if you specify a layout that
  // extends beyond the row capacity. It will, however, not allow users to drag/resize
  // an item past the barrier. They can push items beyond the barrier, though.
  // Intentionally not documented for this reason.
  maxRows: _react.PropTypes.number,

  //
  // Flags
  //
  isDraggable: _react.PropTypes.bool,
  isResizable: _react.PropTypes.bool,
  // Use CSS transforms instead of top/left
  useCSSTransforms: _react.PropTypes.bool,

  //
  // Callbacks
  //

  // Callback so you can save the layout. Calls after each drag & resize stops.
  onLayoutChange: _react.PropTypes.func,

  // Calls when drag starts. Callback is of the signature (layout, oldItem, newItem, placeholder, e).
  // All callbacks below have the same signature. 'start' and 'stop' callbacks omit the 'placeholder'.
  onDragStart: _react.PropTypes.func,
  // Calls on each drag movement.
  onDrag: _react.PropTypes.func,
  // Calls when drag is complete.
  onDragStop: _react.PropTypes.func,
  //Calls when resize starts.
  onResizeStart: _react.PropTypes.func,
  // Calls when resize movement happens.
  onResize: _react.PropTypes.func,
  // Calls when resize is complete.
  onResizeStop: _react.PropTypes.func,

  //
  // Other validations
  //

  // Children must not have duplicate keys.
  children: function children(props, propName, _componentName) {
    _react.PropTypes.node.apply(this, arguments);
    var children = props[propName];

    // Check children keys for duplicates. Throw if found.
    var keys = {};
    _react2.default.Children.forEach(children, function (child) {
      if (keys[child.key]) {
        throw new Error("Duplicate child key found! This will cause problems in ReactGridLayout.");
      }
      keys[child.key] = true;
    });
  }
};
ReactGridLayout.defaultProps = {
  autoSize: true,
  cols: 12,
  className: '',
  rowHeight: 150,
  maxRows: Infinity, // infinite vertical growth
  layout: [],
  margin: [10, 10],
  isDraggable: true,
  isResizable: true,
  useCSSTransforms: true,
  verticalCompact: true,
  onLayoutChange: noop,
  onDragStart: noop,
  onDrag: noop,
  onDragStop: noop,
  onResizeStart: noop,
  onResize: noop,
  onResizeStop: noop
};

var _initialiseProps = function _initialiseProps() {
  this.state = {
    activeDrag: null,
    layout: (0, _utils.synchronizeLayoutWithChildren)(this.props.layout, this.props.children, this.props.cols, this.props.verticalCompact),
    mounted: false,
    oldDragItem: null,
    oldResizeItem: null
  };
};

exports.default = ReactGridLayout;
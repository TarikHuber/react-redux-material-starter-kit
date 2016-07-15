'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDraggable = require('react-draggable');

var _reactResizable = require('react-resizable');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*:: import type {DragCallbackData, Position} from './utils';*/


/**
 * An individual item within a ReactGridLayout.
 */
/*:: type State = {
  resizing: ?{width: number, height: number},
  dragging: ?{top: number, left: number},
  className: string
};*/

var GridItem = function (_React$Component) {
  _inherits(GridItem, _React$Component);

  function GridItem() {
    var _temp, _this, _ret;

    _classCallCheck(this, GridItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      resizing: null,
      dragging: null,
      className: ''
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // Helper for generating column width

  GridItem.prototype.calcColWidth = function calcColWidth() {
    var _props = this.props;
    var margin = _props.margin;
    var containerWidth = _props.containerWidth;
    var cols = _props.cols;

    return (containerWidth - margin[0] * (cols + 1)) / cols;
  };

  /**
   * Return position on the page given an x, y, w, h.
   * left, top, width, height are all in pixels.
   * @param  {Number}  x             X coordinate in grid units.
   * @param  {Number}  y             Y coordinate in grid units.
   * @param  {Number}  w             W coordinate in grid units.
   * @param  {Number}  h             H coordinate in grid units.
   * @return {Object}                Object containing coords.
   */


  GridItem.prototype.calcPosition = function calcPosition(x /*: number*/, y /*: number*/, w /*: number*/, h /*: number*/, state /*: ?Object*/) {
    var _props2 = this.props;
    var margin = _props2.margin;
    var rowHeight = _props2.rowHeight;

    var colWidth = this.calcColWidth();

    var out = {
      left: Math.round(colWidth * x + (x + 1) * margin[0]),
      top: Math.round(rowHeight * y + (y + 1) * margin[1]),
      // 0 * Infinity === NaN, which causes problems with resize constriants;
      // Fix this if it occurs.
      // Note we do it here rather than later because Math.round(Infinity) causes deopt
      width: w === Infinity ? w : Math.round(colWidth * w + Math.max(0, w - 1) * margin[0]),
      height: h === Infinity ? h : Math.round(rowHeight * h + Math.max(0, h - 1) * margin[1])
    };

    if (state && state.resizing) {
      out.width = Math.round(state.resizing.width);
      out.height = Math.round(state.resizing.height);
    }

    if (state && state.dragging) {
      out.top = Math.round(state.dragging.top);
      out.left = Math.round(state.dragging.left);
    }

    return out;
  };

  /**
   * Translate x and y coordinates from pixels to grid units.
   * @param  {Number} top  Top position (relative to parent) in pixels.
   * @param  {Number} left Left position (relative to parent) in pixels.
   * @return {Object} x and y in grid units.
   */


  GridItem.prototype.calcXY = function calcXY(top /*: number*/, left /*: number*/) {
    var _props3 = this.props;
    var margin = _props3.margin;
    var cols = _props3.cols;
    var rowHeight = _props3.rowHeight;
    var w = _props3.w;
    var h = _props3.h;
    var maxRows = _props3.maxRows;

    var colWidth = this.calcColWidth();

    // left = colWidth * x + margin * (x + 1)
    // l = cx + m(x+1)
    // l = cx + mx + m
    // l - m = cx + mx
    // l - m = x(c + m)
    // (l - m) / (c + m) = x
    // x = (left - margin) / (coldWidth + margin)
    var x = Math.round((left - margin[0]) / (colWidth + margin[0]));
    var y = Math.round((top - margin[1]) / (rowHeight + margin[1]));

    // Capping
    x = Math.max(Math.min(x, cols - w), 0);
    y = Math.max(Math.min(y, maxRows - h), 0);

    return { x: x, y: y };
  };

  /**
   * Given a height and width in pixel values, calculate grid units.
   * @param  {Number} height Height in pixels.
   * @param  {Number} width  Width in pixels.
   * @return {Object} w, h as grid units.
   */


  GridItem.prototype.calcWH = function calcWH(_ref) {
    var height = _ref.height;
    var width = _ref.width;
    var _props4 = this.props;
    var margin = _props4.margin;
    var maxRows = _props4.maxRows;
    var cols = _props4.cols;
    var rowHeight = _props4.rowHeight;
    var x = _props4.x;
    var y = _props4.y;

    var colWidth = this.calcColWidth();

    // width = colWidth * w - (margin * (w - 1))
    // ...
    // w = (width + margin) / (colWidth + margin)
    var w = Math.round((width + margin[0]) / (colWidth + margin[0]));
    var h = Math.round((height + margin[1]) / (rowHeight + margin[1]));

    // Capping
    w = Math.max(Math.min(w, cols - x), 0);
    h = Math.max(Math.min(h, maxRows - y), 0);
    return { w: w, h: h };
  };

  /**
   * This is where we set the grid item's absolute placement. It gets a little tricky because we want to do it
   * well when server rendering, and the only way to do that properly is to use percentage width/left because
   * we don't know exactly what the browser viewport is.
   * Unfortunately, CSS Transforms, which are great for performance, break in this instance because a percentage
   * left is relative to the item itself, not its container! So we cannot use them on the server rendering pass.
   *
   * @param  {Object} pos Position object with width, height, left, top.
   * @return {Object}     Style object.
   */


  GridItem.prototype.createStyle = function createStyle(pos /*: Position*/) {
    var _props5 = this.props;
    var usePercentages = _props5.usePercentages;
    var containerWidth = _props5.containerWidth;
    var useCSSTransforms = _props5.useCSSTransforms;


    var style = void 0;
    // CSS Transforms support (default)
    if (useCSSTransforms) {
      style = (0, _utils.setTransform)(pos);
    }
    // top,left (slow)
    else {
        style = (0, _utils.setTopLeft)(pos);

        // This is used for server rendering.
        if (usePercentages) {
          style.left = (0, _utils.perc)(pos.left / containerWidth);
          style.width = (0, _utils.perc)(pos.width / containerWidth);
        }
      }

    return style;
  };

  /**
   * Mix a Draggable instance into a child.
   * @param  {Element} child    Child element.
   * @return {Element}          Child wrapped in Draggable.
   */


  GridItem.prototype.mixinDraggable = function mixinDraggable(child /*: React.Element*/) {
    return _react2.default.createElement(
      _reactDraggable.DraggableCore,
      {
        onStart: this.onDragHandler('onDragStart'),
        onDrag: this.onDragHandler('onDrag'),
        onStop: this.onDragHandler('onDragStop'),
        handle: this.props.handle,
        cancel: ".react-resizable-handle" + (this.props.cancel ? "," + this.props.cancel : "") },
      child
    );
  };

  /**
   * Mix a Resizable instance into a child.
   * @param  {Element} child    Child element.
   * @param  {Object} position  Position object (pixel values)
   * @return {Element}          Child wrapped in Resizable.
   */


  GridItem.prototype.mixinResizable = function mixinResizable(child /*: React.Element*/, position /*: Position*/) {
    var _props6 = this.props;
    var cols = _props6.cols;
    var x = _props6.x;
    var minW = _props6.minW;
    var minH = _props6.minH;
    var maxW = _props6.maxW;
    var maxH = _props6.maxH;

    // This is the max possible width - doesn't go to infinity because of the width of the window

    var maxWidth = this.calcPosition(0, 0, cols - x, 0).width;

    // Calculate min/max constraints using our min & maxes
    var mins = this.calcPosition(0, 0, minW, minH);
    var maxes = this.calcPosition(0, 0, maxW, maxH);
    var minConstraints = [mins.width, mins.height];
    var maxConstraints = [Math.min(maxes.width, maxWidth), Math.min(maxes.height, Infinity)];
    return _react2.default.createElement(
      _reactResizable.Resizable,
      {
        width: position.width,
        height: position.height,
        minConstraints: minConstraints,
        maxConstraints: maxConstraints,
        onResizeStop: this.onResizeHandler('onResizeStop'),
        onResizeStart: this.onResizeHandler('onResizeStart'),
        onResize: this.onResizeHandler('onResize') },
      child
    );
  };

  /**
   * Wrapper around drag events to provide more useful data.
   * All drag events call the function with the given handler name,
   * with the signature (index, x, y).
   *
   * @param  {String} handlerName Handler name to wrap.
   * @return {Function}           Handler function.
   */


  GridItem.prototype.onDragHandler = function onDragHandler(handlerName /*:string*/) {
    var _this2 = this;

    return function (e /*:Event*/, _ref2) {
      var node = _ref2.node;
      var deltaX = _ref2.deltaX;
      var deltaY = _ref2.deltaY;

      if (!_this2.props[handlerName]) return;

      var newPosition /*: {top: number, left: number}*/ = { top: 0, left: 0 };

      // Get new XY
      switch (handlerName) {
        case 'onDragStart':
          // ToDo this wont work on nested parents
          var parentRect = node.offsetParent.getBoundingClientRect();
          var clientRect = node.getBoundingClientRect();
          newPosition.left = clientRect.left - parentRect.left;
          newPosition.top = clientRect.top - parentRect.top;
          _this2.setState({ dragging: newPosition });
          break;
        case 'onDrag':
          if (!_this2.state.dragging) throw new Error('onDrag called before onDragStart.');
          newPosition.left = _this2.state.dragging.left + deltaX;
          newPosition.top = _this2.state.dragging.top + deltaY;
          _this2.setState({ dragging: newPosition });
          break;
        case 'onDragStop':
          if (!_this2.state.dragging) throw new Error('onDragEnd called before onDragStart.');
          newPosition.left = _this2.state.dragging.left;
          newPosition.top = _this2.state.dragging.top;
          _this2.setState({ dragging: null });
          break;
        default:
          throw new Error('onDragHandler called with unrecognized handlerName: ' + handlerName);
      }

      var _calcXY = _this2.calcXY(newPosition.top, newPosition.left);

      var x = _calcXY.x;
      var y = _calcXY.y;


      _this2.props[handlerName](_this2.props.i, x, y, { e: e, node: node, newPosition: newPosition });
    };
  };

  /**
   * Wrapper around drag events to provide more useful data.
   * All drag events call the function with the given handler name,
   * with the signature (index, x, y).
   *
   * @param  {String} handlerName Handler name to wrap.
   * @return {Function}           Handler function.
   */


  GridItem.prototype.onResizeHandler = function onResizeHandler(handlerName /*:string*/) {
    var _this3 = this;

    return function (e /*:Event*/, _ref3) {
      var element = _ref3.element;
      var size = _ref3.size;

      if (!_this3.props[handlerName]) return;
      var _props7 = _this3.props;
      var cols = _props7.cols;
      var x = _props7.x;
      var i = _props7.i;
      var maxW = _props7.maxW;
      var minW = _props7.minW;
      var maxH = _props7.maxH;
      var minH = _props7.minH;

      // Get new XY

      var _calcWH = _this3.calcWH(size);

      var w = _calcWH.w;
      var h = _calcWH.h;

      // Cap w at numCols

      w = Math.min(w, cols - x);
      // Ensure w is at least 1
      w = Math.max(w, 1);

      // Min/max capping
      w = Math.max(Math.min(w, maxW), minW);
      h = Math.max(Math.min(h, maxH), minH);

      _this3.setState({ resizing: handlerName === 'onResizeStop' ? null : size });

      _this3.props[handlerName](i, w, h, { e: e, element: element, size: size });
    };
  };

  GridItem.prototype.render = function render() {
    var _props8 = this.props;
    var x = _props8.x;
    var y = _props8.y;
    var w = _props8.w;
    var h = _props8.h;
    var isDraggable = _props8.isDraggable;
    var isResizable = _props8.isResizable;
    var useCSSTransforms = _props8.useCSSTransforms;


    var pos = this.calcPosition(x, y, w, h, this.state);
    var child = _react2.default.Children.only(this.props.children);

    // Create the child element. We clone the existing element but modify its className and style.
    var newChild = _react2.default.cloneElement(child, {
      // Munge a classname. Use passed in classnames and resizing.
      // React with merge the classNames.
      className: ['react-grid-item', child.props.className || '', this.props.className, this.props.static ? 'static' : '', this.state.resizing ? 'resizing' : '', this.state.dragging ? 'react-draggable-dragging' : '', useCSSTransforms ? 'cssTransforms' : ''].join(' '),
      // We can set the width and height on the child, but unfortunately we can't set the position.
      style: _extends({}, this.props.style, child.props.style, this.createStyle(pos))
    });

    // Resizable support. This is usually on but the user can toggle it off.
    if (isResizable) newChild = this.mixinResizable(newChild, pos);

    // Draggable support. This is always on, except for with placeholders.
    if (isDraggable) newChild = this.mixinDraggable(newChild);

    return newChild;
  };

  return GridItem;
}(_react2.default.Component);

GridItem.propTypes = {
  // Children must be only a single element
  children: _react.PropTypes.element,

  // General grid attributes
  cols: _react.PropTypes.number.isRequired,
  containerWidth: _react.PropTypes.number.isRequired,
  rowHeight: _react.PropTypes.number.isRequired,
  margin: _react.PropTypes.array.isRequired,
  maxRows: _react.PropTypes.number.isRequired,

  // These are all in grid units
  x: _react.PropTypes.number.isRequired,
  y: _react.PropTypes.number.isRequired,
  w: _react.PropTypes.number.isRequired,
  h: _react.PropTypes.number.isRequired,

  // All optional
  minW: function minW(props, propName, componentName, location, propFullName) {
    _react.PropTypes.number(props, propName, componentName, location, propFullName);
    var value = props[propName];
    if (value > props.w || value > props.maxW) return new Error('minWidth bigger than item width/maxWidth');
  },
  maxW: function maxW(props, propName, componentName, location, propFullName) {
    _react.PropTypes.number(props, propName, componentName, location, propFullName);
    var value = props[propName];
    if (value < props.w || value < props.minW) return new Error('maxWidth smaller than item width/minWidth');
  },
  minH: function minH(props, propName, componentName, location, propFullName) {
    _react.PropTypes.number(props, propName, componentName, location, propFullName);
    var value = props[propName];
    if (value > props.h || value > props.maxH) return new Error('minHeight bigger than item height/maxHeight');
  },
  maxH: function maxH(props, propName, componentName, location, propFullName) {
    _react.PropTypes.number(props, propName, componentName, location, propFullName);
    var value = props[propName];
    if (value < props.h || value < props.minH) return new Error('maxHeight smaller than item height/minHeight');
  },

  // ID is nice to have for callbacks
  i: _react.PropTypes.string.isRequired,

  // Functions
  onDragStop: _react.PropTypes.func,
  onDragStart: _react.PropTypes.func,
  onDrag: _react.PropTypes.func,
  onResizeStop: _react.PropTypes.func,
  onResizeStart: _react.PropTypes.func,
  onResize: _react.PropTypes.func,

  // Flags
  isDraggable: _react.PropTypes.bool.isRequired,
  isResizable: _react.PropTypes.bool.isRequired,
  static: _react.PropTypes.bool,

  // Use CSS transforms instead of top/left
  useCSSTransforms: _react.PropTypes.bool.isRequired,

  // Others
  className: _react.PropTypes.string,
  // Selector for draggable handle
  handle: _react.PropTypes.string,
  // Selector for draggable cancel (see react-draggable)
  cancel: _react.PropTypes.string
};
GridItem.defaultProps = {
  className: '',
  cancel: '',
  minH: 1,
  minW: 1,
  maxH: Infinity,
  maxW: Infinity
};
exports.default = GridItem;
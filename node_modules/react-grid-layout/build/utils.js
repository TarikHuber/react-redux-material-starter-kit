'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.bottom = bottom;
exports.cloneLayout = cloneLayout;
exports.cloneLayoutItem = cloneLayoutItem;
exports.collides = collides;
exports.compact = compact;
exports.compactItem = compactItem;
exports.correctBounds = correctBounds;
exports.getLayoutItem = getLayoutItem;
exports.getFirstCollision = getFirstCollision;
exports.getAllCollisions = getAllCollisions;
exports.getStatics = getStatics;
exports.moveElement = moveElement;
exports.moveElementAwayFromCollision = moveElementAwayFromCollision;
exports.perc = perc;
exports.setTransform = setTransform;
exports.setTopLeft = setTopLeft;
exports.sortLayoutItemsByRowCol = sortLayoutItemsByRowCol;
exports.synchronizeLayoutWithChildren = synchronizeLayoutWithChildren;
exports.validateLayout = validateLayout;
exports.autoBindHandlers = autoBindHandlers;
/*:: export type LayoutItemRequired = {w: number, h: number, x: number, y: number, i: string};*/
/*:: export type LayoutItem = LayoutItemRequired &
                         {minW?: number, minH?: number, maxW?: number, maxH?: number,
                          moved?: boolean, static?: boolean,
                          isDraggable?: ?boolean, isResizable?: ?boolean};*/
/*:: export type Layout = Array<LayoutItem>;*/
/*:: export type Position = {left: number, top: number, width: number, height: number};*/
/*:: export type DragCallbackData = {
  node: HTMLElement,
  x: number, y: number,
  deltaX: number, deltaY: number,
  lastX: number, lastY: number
};*/
/*:: export type DragEvent = {e: Event} & DragCallbackData;*/
/*:: export type Size = {width: number, height: number};*/
/*:: export type ResizeEvent = {e: Event, node: HTMLElement, size: Size};*/
/*:: import type React from 'react';*/


var isProduction = process.env.NODE_ENV === 'production';

/**
 * Return the bottom coordinate of the layout.
 *
 * @param  {Array} layout Layout array.
 * @return {Number}       Bottom coordinate.
 */
function bottom(layout /*: Layout*/) /*: number*/ {
  var max = 0,
      bottomY = void 0;
  for (var _i = 0, len = layout.length; _i < len; _i++) {
    bottomY = layout[_i].y + layout[_i].h;
    if (bottomY > max) max = bottomY;
  }
  return max;
}

function cloneLayout(layout /*: Layout*/) /*: Layout*/ {
  var newLayout = Array(layout.length);
  for (var _i2 = 0, len = layout.length; _i2 < len; _i2++) {
    newLayout[_i2] = cloneLayoutItem(layout[_i2]);
  }
  return newLayout;
}

// Fast path to cloning, since this is monomorphic
function cloneLayoutItem(layoutItem /*: LayoutItem*/) /*: LayoutItem*/ {
  return {
    w: layoutItem.w, h: layoutItem.h, x: layoutItem.x, y: layoutItem.y, i: layoutItem.i,
    minW: layoutItem.minW, maxW: layoutItem.maxW, minH: layoutItem.minH, maxH: layoutItem.maxH,
    moved: Boolean(layoutItem.moved), static: Boolean(layoutItem.static),
    // These can be null
    isDraggable: layoutItem.isDraggable, isResizable: layoutItem.isResizable
  };
}

/**
 * Given two layoutitems, check if they collide.
 *
 * @return {Boolean}   True if colliding.
 */
function collides(l1 /*: LayoutItem*/, l2 /*: LayoutItem*/) /*: boolean*/ {
  if (l1 === l2) return false; // same element
  if (l1.x + l1.w <= l2.x) return false; // l1 is left of l2
  if (l1.x >= l2.x + l2.w) return false; // l1 is right of l2
  if (l1.y + l1.h <= l2.y) return false; // l1 is above l2
  if (l1.y >= l2.y + l2.h) return false; // l1 is below l2
  return true; // boxes overlap
}

/**
 * Given a layout, compact it. This involves going down each y coordinate and removing gaps
 * between items.
 *
 * @param  {Array} layout Layout.
 * @param  {Boolean} verticalCompact Whether or not to compact the layout
 *   vertically.
 * @return {Array}       Compacted Layout.
 */
function compact(layout /*: Layout*/, verticalCompact /*: boolean*/) /*: Layout*/ {
  // Statics go in the compareWith array right away so items flow around them.
  var compareWith = getStatics(layout);
  // We go through the items by row and column.
  var sorted = sortLayoutItemsByRowCol(layout);
  // Holding for new items.
  var out = Array(layout.length);

  for (var _i3 = 0, len = sorted.length; _i3 < len; _i3++) {
    var l = sorted[_i3];

    // Don't move static elements
    if (!l.static) {
      l = compactItem(compareWith, l, verticalCompact);

      // Add to comparison array. We only collide with items before this one.
      // Statics are already in this array.
      compareWith.push(l);
    }

    // Add to output array to make sure they still come out in the right order.
    out[layout.indexOf(l)] = l;

    // Clear moved flag, if it exists.
    l.moved = false;
  }

  return out;
}

/**
 * Compact an item in the layout.
 */
function compactItem(compareWith /*: Layout*/, l /*: LayoutItem*/, verticalCompact /*: boolean*/) /*: LayoutItem*/ {
  if (verticalCompact) {
    // Move the element up as far as it can go without colliding.
    while (l.y > 0 && !getFirstCollision(compareWith, l)) {
      l.y--;
    }
  }

  // Move it down, and keep moving it down if it's colliding.
  var collides = void 0;
  while (collides = getFirstCollision(compareWith, l)) {
    l.y = collides.y + collides.h;
  }
  return l;
}

/**
 * Given a layout, make sure all elements fit within its bounds.
 *
 * @param  {Array} layout Layout array.
 * @param  {Number} bounds Number of columns.
 */
function correctBounds(layout /*: Layout*/, bounds /*: {cols: number}*/) /*: Layout*/ {
  var collidesWith = getStatics(layout);
  for (var _i4 = 0, len = layout.length; _i4 < len; _i4++) {
    var l = layout[_i4];
    // Overflows right
    if (l.x + l.w > bounds.cols) l.x = bounds.cols - l.w;
    // Overflows left
    if (l.x < 0) {
      l.x = 0;
      l.w = bounds.cols;
    }
    if (!l.static) collidesWith.push(l);else {
      // If this is static and collides with other statics, we must move it down.
      // We have to do something nicer than just letting them overlap.
      while (getFirstCollision(collidesWith, l)) {
        l.y++;
      }
    }
  }
  return layout;
}

/**
 * Get a layout item by ID. Used so we can override later on if necessary.
 *
 * @param  {Array}  layout Layout array.
 * @param  {String} id     ID
 * @return {LayoutItem}    Item at ID.
 */
function getLayoutItem(layout /*: Layout*/, id /*: string*/) /*: ?LayoutItem*/ {
  for (var _i5 = 0, len = layout.length; _i5 < len; _i5++) {
    if (layout[_i5].i === id) return layout[_i5];
  }
}

/**
 * Returns the first item this layout collides with.
 * It doesn't appear to matter which order we approach this from, although
 * perhaps that is the wrong thing to do.
 *
 * @param  {Object} layoutItem Layout item.
 * @return {Object|undefined}  A colliding layout item, or undefined.
 */
function getFirstCollision(layout /*: Layout*/, layoutItem /*: LayoutItem*/) /*: ?LayoutItem*/ {
  for (var _i6 = 0, len = layout.length; _i6 < len; _i6++) {
    if (collides(layout[_i6], layoutItem)) return layout[_i6];
  }
}

function getAllCollisions(layout /*: Layout*/, layoutItem /*: LayoutItem*/) /*: Array<LayoutItem>*/ {
  return layout.filter(function (l) {
    return collides(l, layoutItem);
  });
}

/**
 * Get all static elements.
 * @param  {Array} layout Array of layout objects.
 * @return {Array}        Array of static layout items..
 */
function getStatics(layout /*: Layout*/) /*: Array<LayoutItem>*/ {
  return layout.filter(function (l) {
    return l.static;
  });
}

/**
 * Move an element. Responsible for doing cascading movements of other elements.
 *
 * @param  {Array}      layout Full layout to modify.
 * @param  {LayoutItem} l      element to move.
 * @param  {Number}     [x]    X position in grid units.
 * @param  {Number}     [y]    Y position in grid units.
 * @param  {Boolean}    [isUserAction] If true, designates that the item we're moving is
 *                                     being dragged/resized by th euser.
 */
function moveElement(layout /*: Layout*/, l /*: LayoutItem*/, x /*: ?number*/, y /*: ?number*/, isUserAction /*: ?boolean*/) /*: Layout*/ {
  if (l.static) return layout;

  // Short-circuit if nothing to do.
  if (l.y === y && l.x === x) return layout;

  var movingUp = y && l.y > y;
  // This is quite a bit faster than extending the object
  if (typeof x === 'number') l.x = x;
  if (typeof y === 'number') l.y = y;
  l.moved = true;

  // If this collides with anything, move it.
  // When doing this comparison, we have to sort the items we compare with
  // to ensure, in the case of multiple collisions, that we're getting the
  // nearest collision.
  var sorted = sortLayoutItemsByRowCol(layout);
  if (movingUp) sorted = sorted.reverse();
  var collisions = getAllCollisions(sorted, l);

  // Move each item that collides away from this element.
  for (var _i7 = 0, len = collisions.length; _i7 < len; _i7++) {
    var collision = collisions[_i7];
    // console.log('resolving collision between', l.i, 'at', l.y, 'and', collision.i, 'at', collision.y);

    // Short circuit so we can't infinite loop
    if (collision.moved) continue;

    // This makes it feel a bit more precise by waiting to swap for just a bit when moving up.
    if (l.y > collision.y && l.y - collision.y > collision.h / 4) continue;

    // Don't move static items - we have to move *this* element away
    if (collision.static) {
      layout = moveElementAwayFromCollision(layout, collision, l, isUserAction);
    } else {
      layout = moveElementAwayFromCollision(layout, l, collision, isUserAction);
    }
  }

  return layout;
}

/**
 * This is where the magic needs to happen - given a collision, move an element away from the collision.
 * We attempt to move it up if there's room, otherwise it goes below.
 *
 * @param  {Array} layout            Full layout to modify.
 * @param  {LayoutItem} collidesWith Layout item we're colliding with.
 * @param  {LayoutItem} itemToMove   Layout item we're moving.
 * @param  {Boolean} [isUserAction]  If true, designates that the item we're moving is being dragged/resized
 *                                   by the user.
 */
function moveElementAwayFromCollision(layout /*: Layout*/, collidesWith /*: LayoutItem*/, itemToMove /*: LayoutItem*/, isUserAction /*: ?boolean*/) /*: Layout*/ {

  // If there is enough space above the collision to put this element, move it there.
  // We only do this on the main collision as this can get funky in cascades and cause
  // unwanted swapping behavior.
  if (isUserAction) {
    // Make a mock item so we don't modify the item here, only modify in moveElement.
    var fakeItem /*: LayoutItem*/ = {
      x: itemToMove.x,
      y: itemToMove.y,
      w: itemToMove.w,
      h: itemToMove.h,
      i: '-1'
    };
    fakeItem.y = Math.max(collidesWith.y - itemToMove.h, 0);
    if (!getFirstCollision(layout, fakeItem)) {
      return moveElement(layout, itemToMove, undefined, fakeItem.y);
    }
  }

  // Previously this was optimized to move below the collision directly, but this can cause problems
  // with cascading moves, as an item may actually leapflog a collision and cause a reversal in order.
  return moveElement(layout, itemToMove, undefined, itemToMove.y + 1);
}

/**
 * Helper to convert a number to a percentage string.
 *
 * @param  {Number} num Any number
 * @return {String}     That number as a percentage.
 */
function perc(num /*: number*/) /*: string*/ {
  return num * 100 + '%';
}

function setTransform(_ref) /*: Object*/ {
  var top = _ref.top;
  var left = _ref.left;
  var width = _ref.width;
  var height = _ref.height;

  // Replace unitless items with px
  var translate = 'translate(' + left + 'px,' + top + 'px)';
  return {
    transform: translate,
    WebkitTransform: translate,
    MozTransform: translate,
    msTransform: translate,
    OTransform: translate,
    width: width + 'px',
    height: height + 'px',
    position: 'absolute'
  };
}

function setTopLeft(_ref2) /*: Object*/ {
  var top = _ref2.top;
  var left = _ref2.left;
  var width = _ref2.width;
  var height = _ref2.height;

  return {
    top: top + 'px',
    left: left + 'px',
    width: width + 'px',
    height: height + 'px',
    position: 'absolute'
  };
}

/**
 * Get layout items sorted from top left to right and down.
 *
 * @return {Array} Array of layout objects.
 * @return {Array}        Layout, sorted static items first.
 */
function sortLayoutItemsByRowCol(layout /*: Layout*/) /*: Layout*/ {
  return [].concat(layout).sort(function (a, b) {
    if (a.y > b.y || a.y === b.y && a.x > b.x) {
      return 1;
    }
    return -1;
  });
}

/**
 * Generate a layout using the initialLayout and children as a template.
 * Missing entries will be added, extraneous ones will be truncated.
 *
 * @param  {Array}  initialLayout Layout passed in through props.
 * @param  {String} breakpoint    Current responsive breakpoint.
 * @param  {Boolean} verticalCompact Whether or not to compact the layout vertically.
 * @return {Array}                Working layout.
 */
function synchronizeLayoutWithChildren(initialLayout /*: Layout*/, children /*: Array<React.Element>|React.Element*/, cols /*: number*/, verticalCompact /*: boolean*/) /*: Layout*/ {
  // ensure 'children' is always an array
  if (!Array.isArray(children)) {
    children = [children];
  }
  initialLayout = initialLayout || [];

  // Generate one layout item per child.
  var layout /*: Layout*/ = [];
  for (var _i8 = 0, len = children.length; _i8 < len; _i8++) {
    var newItem = void 0;
    var child = children[_i8];

    // Don't overwrite if it already exists.
    var exists = getLayoutItem(initialLayout, child.key || "1" /* FIXME satisfies Flow */);
    if (exists) {
      newItem = cloneLayoutItem(exists);
    } else {
      var g = child.props._grid;

      // Hey, this item has a _grid property, use it.
      if (g) {
        if (!isProduction) {
          validateLayout([g], 'ReactGridLayout.children');
        }
        // Validated; add it to the layout. Bottom 'y' possible is the bottom of the layout.
        // This allows you to do nice stuff like specify {y: Infinity}
        if (verticalCompact) {
          newItem = cloneLayoutItem(_extends({}, g, { y: Math.min(bottom(layout), g.y), i: child.key }));
        } else {
          newItem = cloneLayoutItem(_extends({}, g, { y: g.y, i: child.key }));
        }
      }
      // Nothing provided: ensure this is added to the bottom
      else {
          newItem = cloneLayoutItem({ w: 1, h: 1, x: 0, y: bottom(layout), i: child.key || "1" });
        }
    }
    layout[_i8] = newItem;
  }

  // Correct the layout.
  layout = correctBounds(layout, { cols: cols });
  layout = compact(layout, verticalCompact);

  return layout;
}

/**
 * Validate a layout. Throws errors.
 *
 * @param  {Array}  layout        Array of layout items.
 * @param  {String} [contextName] Context name for errors.
 * @throw  {Error}                Validation error.
 */
function validateLayout(layout /*: Layout*/, contextName /*: string*/) /*: void*/ {
  contextName = contextName || "Layout";
  var subProps = ['x', 'y', 'w', 'h'];
  if (!Array.isArray(layout)) throw new Error(contextName + " must be an array!");
  for (var _i9 = 0, len = layout.length; _i9 < len; _i9++) {
    var item = layout[_i9];
    for (var j = 0; j < subProps.length; j++) {
      if (typeof item[subProps[j]] !== 'number') {
        throw new Error('ReactGridLayout: ' + contextName + '[' + _i9 + '].' + subProps[j] + ' must be a number!');
      }
    }
    if (item.i && typeof item.i !== 'string') {
      throw new Error('ReactGridLayout: ' + contextName + '[' + _i9 + '].i must be a string!');
    }
    if (item.static !== undefined && typeof item.static !== 'boolean') {
      throw new Error('ReactGridLayout: ' + contextName + '[' + _i9 + '].static must be a boolean!');
    }
  }
}

// Flow can't really figure this out, so we just use Object
function autoBindHandlers(el /*: Object*/, fns /*: Array<string>*/) /*: void*/ {
  fns.forEach(function (key) {
    return el[key] = el[key].bind(el);
  });
}
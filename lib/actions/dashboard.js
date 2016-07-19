'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onLayoutChange = onLayoutChange;
var ON_LAYOUT_CHANGE = exports.ON_LAYOUT_CHANGE = 'ON_LAYOUT_CHANGE';

function onLayoutChange(layout) {
  return {
    type: ON_LAYOUT_CHANGE,
    layout: layout
  };
}
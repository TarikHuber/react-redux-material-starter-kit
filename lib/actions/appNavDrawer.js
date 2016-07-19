'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleDrawerOpen = toggleDrawerOpen;
exports.toggleDrawerDock = toggleDrawerDock;
exports.setDrawerOpen = setDrawerOpen;
exports.setSelectedIndex = setSelectedIndex;
exports.setResponsive = setResponsive;
var TOGGLE_DRAWER_OPEN = exports.TOGGLE_DRAWER_OPEN = 'TOGGLE_DRAWER_OPEN';
var TOGGLE_DRAWER_DOCK = exports.TOGGLE_DRAWER_DOCK = 'TOGGLE_DRAWER_DOCK';
var SET_DRAWER_OPEN = exports.SET_DRAWER_OPEN = 'SET_DRAWER_OPEN';
var SET_SELECTED_INDEX = exports.SET_SELECTED_INDEX = 'SET_SELECTED_INDEX';
var SET_RESPONSIVE = exports.SET_RESPONSIVE = 'SET_RESPONSIVE';

function toggleDrawerOpen() {
  return {
    type: TOGGLE_DRAWER_OPEN
  };
}

function toggleDrawerDock() {
  return {
    type: TOGGLE_DRAWER_DOCK
  };
}

function setDrawerOpen(open) {
  return {
    type: SET_DRAWER_OPEN,
    open: open
  };
}

function setSelectedIndex(index) {
  return {
    type: SET_SELECTED_INDEX,
    index: index
  };
}

function setResponsive(responsive) {
  return {
    type: SET_RESPONSIVE,
    responsive: responsive
  };
}
export const TOGGLE_DRAWER_OPEN = 'TOGGLE_DRAWER_OPEN';
export const TOGGLE_DRAWER_DOCK = 'TOGGLE_DRAWER_DOCK';
export const SET_DRAWER_OPEN = 'SET_DRAWER_OPEN';
export const SET_SELECTED_INDEX = 'SET_SELECTED_INDEX';


export function toggleDrawerOpen() {
  return {
    type: TOGGLE_DRAWER_OPEN,	
  };
}

export function toggleDrawerDock() {
  return {
    type: TOGGLE_DRAWER_DOCK,	
  };
}

export function setDrawerOpen(open) {
  return {
    type: SET_DRAWER_OPEN,
	open: open,	
  };
}

export function setSelectedIndex(index) {
  return {
    type: SET_SELECTED_INDEX,
	index: index,	
  };
}


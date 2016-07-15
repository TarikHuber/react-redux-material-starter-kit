export const ON_LAYOUT_CHANGE = 'ON_LAYOUT_CHANGE';

export function onLayoutChange(layout) {
  return {
    type: ON_LAYOUT_CHANGE,
	layout: layout,	
  };
}


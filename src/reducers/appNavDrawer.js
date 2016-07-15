import{SET_DRAWER_OPEN,
	TOGGLE_DRAWER_OPEN,
	TOGGLE_DRAWER_DOCK,
	SET_SELECTED_INDEX} from '../actions/appNavDrawer';


const initialState = {
  disableSwipeToOpen: false,
  docked: true,
  open: false,
  openSecondary: false,
  zDepth: 2,
  swipeAreaWidth: 30,
  selectedIndex: '/',
}

const appNavDrawer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER_OPEN:
		return {
			...state,
			open: !state.open
		  };
	case TOGGLE_DRAWER_DOCK:
		return {
			...state,
			docked: !state.docked
		  };
		  
	case SET_DRAWER_OPEN:
		return {
			...state,
			open: action.open
		  };
		  
	case SET_SELECTED_INDEX:
		return {
			...state,
			selectedIndex: action.index
		  };
		  
    default:
      return state;
  }
}

export default appNavDrawer;
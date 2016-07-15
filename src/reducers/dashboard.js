import{ON_LAYOUT_CHANGE} from '../actions/dashboard';

const initialState = {
	  layout: undefined,
}

const appBar = (state = initialState, action) => {
  switch (action.type) {
    case ON_LAYOUT_CHANGE:
		return {
			...state,
			layout: action.layout,
		  };
 
    default:
      return state;
  }
}

export default appBar;
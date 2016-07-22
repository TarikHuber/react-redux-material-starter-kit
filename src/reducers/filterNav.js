import{SET_FILTERNAV_OPEN} from '../actions/filterNav';

const initialState = {
  open: false,
  openSecondary: true,
  zDepth: 2,
}

const filterNav = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERNAV_OPEN:
      return {
        ...state,
        open: action.open
      };
    default:
    return state;
  }
}

export default filterNav;

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/auth';


const initialState = {
  user: undefined,
  apiToken: undefined,
  loggingIn: false,
  loginError: null,
};
 

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
    return Object.assign({}, state, {loggingIn: true});
    case LOGIN_SUCCESS:
    return Object.assign({}, state, {
      loggingIn: false, user: action.user, apiToken:action.apiToken});
      case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        user: null,
        loginError: action.error};
        case LOGOUT:
        return {...state, user:undefined, apiToken:undefined};
        default:
        return state;
      }
    }

import{SET_APP_THEME,
	SET_THEME_DIALOG_OPEN} from '../actions/appStyle';
import find from 'lodash/find';
import themes from '../themes/themes';
import config from '../config';

const initialState = {
  theme: find(themes, { id: config.style.init_theme}),
  dialogOpen:false,
}

const appStyle = (state = initialState, action) => {
  switch (action.type) {
    case SET_APP_THEME:

		return {
			...state,
			theme: action.theme,
		  };

	case SET_THEME_DIALOG_OPEN:

		return {
			...state,
			dialogOpen: action.open,
		  };

    default:
      return state;
  }
}

export default appStyle;

import{UPDATE_INTL,
	SET_INTL_DIALOG_OPEN} from '../actions/intl';
import find from 'lodash/find';
import languages from '../translations/languages';
import config from '../config';

let default_language=find(languages, { key: config.intl.init_lang});

const initialState = {
  locale: default_language.key,
  messages: default_language.messages,
  dialogOpen: false,
}

const intl = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INTL:

		let language=find(languages, { key: action.locale});

		return {
			...state,
			locale: action.locale,
			messages: language.messages,
		  }

	case SET_INTL_DIALOG_OPEN:
		return {
			...state,
			dialogOpen: action.open,
		  }


    default:
      return state
  }
}

export default intl

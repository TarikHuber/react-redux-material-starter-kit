import{SET_SIGNIN_DIALOG_OPEN,
	SET_SIGNIN_TEXT_ERRORS,} from '../actions/signIn';


	const initialState = {
		signInDialogOpen: false,
		errors: {},
	}

	const singIn = (state = initialState, action) => {
		switch (action.type) {

			case SET_SIGNIN_DIALOG_OPEN:
			return {
				...state,
				signInDialogOpen: action.open,
			};

			case SET_SIGNIN_TEXT_ERRORS:

			return {
				...state,
				errors: action.errors
			};

			default:
			return state;
		}
	}

	export default singIn;

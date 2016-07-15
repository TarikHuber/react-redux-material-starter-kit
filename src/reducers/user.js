
const initialState = {
	  name: undefined,
	  email: undefined,
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
		return {
			...state,
			name: action.name,
		  };
 
    default:
      return state;
  }
}

export default user;
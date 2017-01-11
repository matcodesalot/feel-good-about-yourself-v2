import * as actions from './actions';

const initialState = {
	isLoggedIn: false,
	currentUser: "",
	feels: [],
	error: "",
	feedback: "",
};

export default function reducerFeels(state = initialState, action) {
	switch(action.type) {
		case actions.LOG_IN_SUCCESS:
			return Object.assign({}, state, {
				isLoggedIn: true,
				currentUser: action.payload,
			});

		case actions.LOG_IN_ERROR:
			return Object.assign({}, state, {
				isLoggedIn: false,
				error: action.payload,
			});

		case actions.SIGN_UP_SUCCESS:
			return Object.assign({}, state, {
				feedback: "You have successfully registered!",
			});

		case actions.SIGN_UP_ERROR:
			return Object.assign({}, state, {
				error: action.payload,
			});

		default:
			return state;
	}
}
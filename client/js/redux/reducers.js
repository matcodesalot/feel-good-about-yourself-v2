import * as actions from './actions';

const initialState = {
	isLoggedIn: false,
	currentUser: "",
	currentPass: "",
	feels: [],
	currentFeel: {},
	error: "",
	feedback: "",
	index: 1,
};

export default function reducerFeels(state = initialState, action) {
	switch(action.type) {
		case actions.LOG_IN_SUCCESS:
			return Object.assign({}, state, {
				isLoggedIn: true,
				currentUser: action.payloadUser,
				currentPass: action.payloadPass,
			});

		case actions.LOG_IN_ERROR:
			return Object.assign({}, state, {
				isLoggedIn: false,
				currentUser: null,
				currentPass: null,
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

		case actions.FETCH_FEELS_SUCCESS:
			return Object.assign({}, state, {
				feels: action.payload,
				currentFeel: action.payload[state.index - 1],
			});

		case actions.FETCH_FEELS_ERROR:
			return Object.assign({}, state, {
				error: action.payload,
			});

		case actions.NEXT_FEEL:
			return Object.assign({}, state, {
				currentFeel: state.feels[state.index],
				index: state.index + action.payload,
			});

		case actions.RANDOM_FEEL:
			return Object.assign({}, state, {
				index: Math.floor(Math.random() * state.feels.length),
				currentFeel: state.feels[state.index],
			});

		case actions.END_OF_FEELS:
			return Object.assign({}, state, {
				index: state.feels.length - 1,
			});

		case actions.ADD_FEEL_SUCCESS:
			return Object.assign({}, state, {
				feels: state.feels.concat(action.payload),
			});

		case actions.ADD_FEEL_ERROR:
			return Object.assign({}, state, {
				error: action.payload,
			});

		case actions.DESTROY_SESSION:
			return Object.assign({}, state, {
				isLoggedIn: false,
				currentUser: null,
				currentPass: null,
			});

		default:
			return state;
	}
}
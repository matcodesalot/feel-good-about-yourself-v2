import * as actions from './actions';

const initialState = {
	isLoggedIn: false,
	currentUser: "",
	currentPass: "",
	feels: [],
	error: "",
	feedback: "",
	index: 0,
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
			});

		case actions.FETCH_FEELS_ERROR:
			return Object.assign({}, state, {
				error: action.payload,
			});

		case actions.RANDOM_FEEL:
			return Object.assign({}, state, {
				index: Math.floor(Math.random() * state.feels.length),
			});

		case actions.ADD_FEEL_SUCCESS:
			return Object.assign({}, state, {
				feels: state.feels.concat({feelText: action.payload.feelText}),
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

		case actions.UPDATE_LIKES_SUCCESS:
			return Object.assign({}, state, {
				feedback: "You have successfully liked this feel!",
				feels: state.feels.map(f => f._id === action.id ? {...f, likes: action.likes.likes} : f),
			});

		case actions.UPDATE_LIKES_ERROR:
			return Object.assign({}, state, {
				error: action.payload,
			});

		default:
			return state;
	}
}
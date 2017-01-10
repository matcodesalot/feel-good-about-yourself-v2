import * as actions from './actions';

const initialState = {
	isLoggedIn: false,
	currentUser: "",
	feels: [],
};

export default function reducerFeels(state = initialState, action) {
	switch(action.type) {
		case actions.LOG_IN_SUCCESS:
			return Object.assign({}, state, {
				isLoggedIn: true,
				currentUser: action.payload,
			});

		default:
			return state;
	}
}
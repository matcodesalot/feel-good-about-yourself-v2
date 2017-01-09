import * as actions from './actions';

const initialState = {
	isLoggedIn: false,
	thoughts: [],
};

export default function reducerFeels(state = initialState, action) {
	switch(action.type) {
		default:
			return state;
	}
}
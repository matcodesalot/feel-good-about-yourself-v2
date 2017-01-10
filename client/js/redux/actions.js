var fetch = require('isomorphic-fetch');

export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export function logInSuccess(data) {
	return {
		type: LOG_IN_SUCCESS,
		payload: data,
	};
}
var fetch = require('isomorphic-fetch');

export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export function logInSuccess(data) {
	return {
		type: LOG_IN_SUCCESS,
		payload: data,
	};
}

export const LOG_IN_ERROR = "LOG_IN_ERROR";
export function logInError(err) {
	return {
		type: LOG_IN_ERROR,
		payload: err,
	};
}

export function logInAsync(user) {
	return function(dispatch) {
		let endpoint = "/users/" + user.username;

		return fetch(endpoint, {
			method: "GET",
			headers: {"Authorization": "Basic " + btoa(user.username + ":" + user.password)}
		})
		.then(response => {
			if (response.status < 200 || response.status >= 300) {
				let error = new Error(response.statusText);
				error.response = response;
				throw error;
			}
			return response.json();
		})
		.then(data => {
			return dispatch(logInSuccess(data));
		})
		.catch(error => {
			return dispatch(logInError(error));
		})
	}
}

export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export function signUpSuccess() {
	return {
		type: SIGN_UP_SUCCESS,
	};
}

export const SIGN_UP_ERROR = "SIGN_UP_ERROR";
export function signUpError(err) {
	return {
		type: SIGN_UP_ERROR,
		payload: err,
	};
}

export function signUpAsync(user) {
	return function(dispatch) {
		let endpoint = "/users";

		return fetch(endpoint, {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: user.username,
				password: user.password,
			})
		})
		.then(response => {
			if (response.status < 200 || response.status >= 300) {
				let error = new Error(response.statusText);
				error.response = response;
				throw error;
			}
			return response.json();
		})
		.then(() => {
			return dispatch(signUpSuccess());
		})
		.catch(error => {
			return dispatch(signUpError(error));
		})
	}
}

export const FETCH_FEELS_SUCCESS = "FETCH_FEELS_SUCCESS";
export function fetchFeelsSuccess(data) {
	return {
		type: FETCH_FEELS_SUCCESS,
		payload: data,
	};
}

export const FETCH_FEELS_ERROR = "FETCH_FEELS_ERROR";
export function fetchFeelsError(err) {
	return {
		type: FETCH_FEELS_ERROR,
		payload: err,
	};
}

export function fetchFeelsAsync() {
	return function(dispatch) {
		let endpoint = "/feels";

		return fetch(endpoint, {
			method: "GET"
		})
		.then(response => {
			if (response.status < 200 || response.status >= 300) {
				let error = new Error(response.statusText);
				error.response = response;
				throw error;
			}
			return response.json();
		})
		.then(data => {
			return dispatch(fetchFeelsSuccess(data));
		})
		.catch(error => {
			return dispatch(fetchFeelsError(error));
		})
	}
}

export const NEXT_FEEL = "NEXT_FEEL";
export function nextFeel(next) {
	return {
		type: NEXT_FEEL,
		payload: next,
	};
}

export const RANDOM_FEEL = "RANDOM_FEEL";
export function randomFeel() {
	return {
		type: RANDOM_FEEL,
	};
}

export const END_OF_FEELS = "END_OF_FEELS";
export function endOfFeels() {
	return {
		type: END_OF_FEELS,
	};
}
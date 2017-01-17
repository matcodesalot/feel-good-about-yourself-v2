import 'isomorphic-fetch';

export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export function logInSuccess(data) {
	return {
		type: LOG_IN_SUCCESS,
		payloadUser: data.username,
		payloadPass: data.password,
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

export const RANDOM_FEEL = "RANDOM_FEEL";
export function randomFeel() {
	return {
		type: RANDOM_FEEL,
	};
}

export const ADD_FEEL_SUCCESS = "ADD_FEEL_SUCCESS";
export function addFeelSuccess(data) {
	return {
		type: ADD_FEEL_SUCCESS,
		payload: data,
	};
}

export const ADD_FEEL_ERROR = "ADD_FEEL_ERROR";
export function addFeelError(err) {
	return {
		type: ADD_FEEL_ERROR,
		payload: err,
	};
}

export function addFeelAsync(feel, user) {
	return function(dispatch) {
		let endpoint = "/feels";

		return fetch(endpoint, {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				feelText: feel,
				fromUser: user.username,
				likes: 0,
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
		.then(data => {
			return dispatch(addFeelSuccess(data));
		})
		.catch(error => {
			return dispatch(addFeelError(error));
		})
	}
}

export const DESTROY_SESSION = "DESTROY_SESSION";
export function destroySession() {
	return {
		type: DESTROY_SESSION,
	};
}

export const UPDATE_LIKES_SUCCESS = "UPDATE_LIKES_SUCCESS";
export function updateLikesSuccess() {
	return {
		type: UPDATE_LIKES_SUCCESS,
	};
}

export const UPDATE_LIKES_ERROR = "UPDATE_LIKES_ERROR";
export function updateLikesError(err) {
	return {
		type: UPDATE_LIKES_ERROR,
		payload: err,
	};
}

export function updateLikesAsync(feelId, likes) {
	return function(dispatch) {
		let endpoint = "/feels/" + feelId;

		return fetch(endpoint, {
			method: "PUT",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				likes: likes,
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
			return dispatch(updateLikesSuccess());
		})
		.catch(error => {
			return dispatch(updateLikesError(error));
		})
	}
}
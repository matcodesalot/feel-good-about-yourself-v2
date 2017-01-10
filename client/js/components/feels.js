import React, {Component} from 'react';
import {Router, Route, Link} from 'react-router';

export default class Feels extends Component {
	render() {
		return (
			<div>
				<h1>You made it!</h1>
				<Link to={`/login`}>Log In</Link>
				<Link to={`/signup`}>Sign Up</Link>
			</div>
		);
	}
};
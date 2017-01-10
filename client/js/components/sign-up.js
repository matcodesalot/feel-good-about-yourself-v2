import React, {Component} from 'react';
import {Router, Route, Link} from 'react-router';

export default class SignUp extends Component {
	render() {
		return(
			<div>
				<ul>
					<li><Link to={`/signup`}>Sign Up</Link></li>
					<li><Link to={`/login`}>Log In</Link></li>
				</ul>
			</div>
		);
	}
};
import React, {Component} from 'react';
import {Router, Route, Link} from 'react-router';

export default class LogIn extends Component {
	render() {
		return(
			<div id="login-id">
				<ul>
					<li><Link to={`/signup`}>Sign Up</Link></li>
					<li><Link to={`/login`}>Log In</Link></li>
				</ul>

				<div>
					<h1>Welcome Back! We Missed You!</h1>
					<form className="go-bottom" action="/" method="post">
						<div>
							<input id="username" name="username" type="text" autoComplete="off" required />
							<label htmlFor="username">Username<span className="req">*</span></label>
						</div>
						<div>
							<input id="password" name="password" type="password" autoComplete="off" required />
							<label htmlFor="password">Password<span className="req">*</span></label>
						</div>
					</form>
				</div>
			</div>
		);
	}
};
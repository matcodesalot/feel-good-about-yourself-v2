import React, {Component} from 'react';
import {Router, Route, Link} from 'react-router';

export default class SignUp extends Component {
	render() {
		return(
			<div>
				<ul className="tab-group">
					<li className="active"><Link to={`/signup`}>Sign Up</Link></li>
					<li><Link to={`/login`}>Log In</Link></li>
				</ul>

				<div>
					<h1>Sign Up for Free</h1>
					<form className="go-bottom" action="/" method="post">
						<div>
							<input id="username" name="username" type="text" autoComplete="off" required />
							<label htmlFor="username">Username<span className="req">*</span></label>
						</div>
						<div>
							<input id="password" name="password" type="password" autoComplete="off" required />
							<label htmlFor="password">Password<span className="req">*</span></label>
						</div>
						<div>
							<input id="confirm-password" name="confirm-password" type="password" autoComplete="off" required />
							<label htmlFor="confirm-password">Confirm Password<span className="req">*</span></label>
						</div>
						<button className="button button-block" type="submit">Get Started</button>
					</form>
				</div>
			</div>
		);
	}
};
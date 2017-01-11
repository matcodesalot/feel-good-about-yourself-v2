import React, {Component} from 'react';
import {Router, Route, Link} from 'react-router';
import * as actions from '../redux/actions';
import {connect} from 'react-redux';

class SignUp extends Component {
	onSignUpPress(e) {
		e.preventDefault();
		if(this.refs.password.value === this.refs.confirmPassword.value && this.refs.password.value !== "" && this.refs.confirmPassword.value !== "") {
			this.props.dispatch(actions.signUpAsync({
				username: this.refs.username.value,
				password: this.refs.password.value,
			}));
			this.props.router.push("/");
		}
		else {
			//maybe dispatch a feedback action
			console.log("Invalid password");
		}
		this.refs.username.value = "";
		this.refs.password.value = "";
		this.refs.confirmPassword.value = "";
	}

	render() {
		return(
			<div>
				<ul className="row tab-group">
					<li className="col"><Link to={`/`}>Home</Link></li>
					<li className="col active"><Link to={`/signup`}>Sign Up</Link></li>
					<li className="col"><Link to={`/login`}>Log In</Link></li>
				</ul>

				<div>
					<h1>Sign Up for Free</h1>
					<form className="go-bottom" action="/" method="post">
						<div>
							<input id="username" name="username" type="text" ref="username" autoComplete="off" required />
							<label htmlFor="username">Username<span className="req">*</span></label>
						</div>
						<div>
							<input id="password" name="password" type="password" ref="password" autoComplete="off" required />
							<label htmlFor="password">Password<span className="req">*</span></label>
						</div>
						<div>
							<input id="confirm-password" name="confirm-password" type="password" ref="confirmPassword" autoComplete="off" required />
							<label htmlFor="confirm-password">Confirm Password<span className="req">*</span></label>
						</div>
						<button className="button button-block" type="submit" onClick={this.onSignUpPress.bind(this)}>Get Started</button>
					</form>
				</div>
			</div>
		);
	}
};

export default connect()(SignUp);
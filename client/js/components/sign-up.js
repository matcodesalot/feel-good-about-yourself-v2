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
			<div className="container">
				<header className="clearfix">
					<nav>
						<ul className="nav nav-pills pull-right">
							<li><Link to={`/`}>Home</Link></li>
							<li><Link to={`/login`}>Log In</Link></li>
							<li className="active"><Link to={`/signup`}>Sign Up</Link></li>
						</ul>
					</nav>
					<h3 className="text-muted">Sign Up for Free!</h3>
				</header>

				<form className="form-signin" action="/" method="post">
					<label className="sr-only" htmlFor="inputUsername">Username*</label>
					<input className="form-control" id="inputUsername" type="text" ref="username" placeholder="Username" autoComplete="off" required />
					<label className="sr-only" htmlFor="inputPassword">Password*</label>
					<input className="form-control" id="inputPassword" type="password" ref="password" placeholder="Password" autoComplete="off" required />
					<label className="sr-only" htmlFor="inputConfirmPassword">Confirm Password*</label>
					<input className="form-control" id="inputConfirmPassword" type="password" ref="confirmPassword" placeholder="Confirm Password" autoComplete="off" required />
					<button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.onSignUpPress.bind(this)}>Get Started</button>
				</form>
			</div>
		);
	}
};

export default connect()(SignUp);
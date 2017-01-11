import React, {Component} from 'react';
import {Router, Route, Link} from 'react-router';
import * as actions from '../redux/actions';
import {connect} from 'react-redux';

class LogIn extends Component {
	onLoginPress(e) {
		e.preventDefault();
		this.props.dispatch(actions.logInAsync({
			username: this.refs.username.value,
			password: this.refs.password.value,
		}));
		this.refs.username.value = "";
		this.refs.password.value = "";
		this.props.router.push("/");
	}

	render() {
		return(
			<div id="login-id">
				<ul className="tab-group">
					<li><Link to={`/signup`}>Sign Up</Link></li>
					<li className="active"><Link to={`/login`}>Log In</Link></li>
				</ul>

				<div>
					<h1>Welcome Back! We Missed You!</h1>
					<form className="go-bottom" action="/" method="post">
						<div>
							<input id="username" name="username" type="text" ref="username" autoComplete="off" required />
							<label htmlFor="username">Username<span className="req">*</span></label>
						</div>
						<div>
							<input id="password" name="password" type="password" ref="password" autoComplete="off" required />
							<label htmlFor="password">Password<span className="req">*</span></label>
						</div>
						<button className="button button-block" type="submit" onClick={this.onLoginPress.bind(this)}>Log In</button>
					</form>
				</div>
			</div>
		);
	}
};

export default connect()(LogIn);
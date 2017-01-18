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
			<div className="container">
				<header className="clearfix">
					<nav>
						<ul className="nav nav-pills pull-right">
							<li><Link to={`/`}>Home</Link></li>
							<li className="active"><Link to={`/login`}>Log In</Link></li>
							<li><Link to={`/signup`}>Sign Up</Link></li>
						</ul>
					</nav>
					<h3 className="text-muted">Welcome Back! We Missed You!</h3>
				</header>

				<form className="form-signin" action="/" method="post">
					<label className="sr-only" htmlFor="inputUsername">Username*</label>
					<input className="form-control" id="inputUsername" type="text" ref="username" placeholder="Username" autoComplete="off" required />
					<label className="sr-only" htmlFor="inputPassword">Password*</label>
					<input className="form-control" id="inputPassword" type="password" ref="password" placeholder="Password" autoComplete="off" required />
					<button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.onLoginPress.bind(this)}>Log In</button>
				</form>
			</div>
		);
	}
};

export default connect()(LogIn);
import React, {Component} from 'react';
import {Router, Route, Link} from 'react-router';
import * as actions from '../redux/actions';
import {connect} from 'react-redux';

class AddFeel extends Component {
	onSubmitPress(e) {
		e.preventDefault();
		this.props.dispatch(actions.addFeelAsync(this.refs.feel.value, {username: this.props.currentUser}));
		this.refs.feel.value = "";
		this.props.router.push("/");
	}

	onLogOutPress() {
		this.props.dispatch(actions.destroySession());
	}

	render() {
		return(
			<div className="container">
				<header className="clearfix">
					<nav>
						<ul className="nav nav-pills pull-right">
							<li><Link to={`/`}>Home</Link></li>
							<li className="active"><Link to={`/add`}>Add a Feel</Link></li>
							<li><Link to={`/`} onClick={this.onLogOutPress.bind(this)}>Log Out</Link></li>
						</ul>
					</nav>
					<h3 className="text-muted">Feel Good About Yourself</h3>
				</header>

				<form className="form-signin" action="/feels" method="post">
					<label className="sr-only" htmlFor="inputFeel">Make the world happy!</label>
					<input className="form-control" id="inputFeel" type="text" ref="feel" placeholder="Make the world happy!" autoComplete="on" required />
					<button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.onSubmitPress.bind(this)}>Submit your feel</button>
				</form>
			</div>
		);
	}
};

let mapStateToProps = function(state, props) {
	return {
		currentUser: state.currentUser,
	}
};

export default connect(mapStateToProps)(AddFeel);
import React, {Component} from 'react';
import {Router, Route, Link} from 'react-router';
import * as actions from '../redux/actions';
import {connect} from 'react-redux';
import FeelItem from './feel-item';

class Feels extends Component {
	componentWillMount() {
		this.props.dispatch(actions.fetchFeelsAsync());
	}

	onRandomPress() {
		this.props.dispatch(actions.randomFeel());
	}

	onLogOutPress() {
		this.props.dispatch(actions.destroySession());
	}

	render() {
		if(!this.props.isLoggedIn) {
			return (
				<div className="container">
					<header className="clearfix">
						<nav>
							<ul className="nav nav-pills pull-right">
								<li className="active"><Link to={`/`}>Home</Link></li>
								<li><Link to={`/login`}>Log In</Link></li>
								<li><Link to={`/signup`}>Sign Up</Link></li>
							</ul>
						</nav>
						<h3 className="text-muted">Feel Good About Yourself</h3>
					</header>
					
					<FeelItem feel={this.props.currentFeel} />

					<div className="text-center">
						<button className="btn btn-lg btn-primary" type="button" onClick={this.onRandomPress.bind(this)}>Feel Good</button>
					</div>
				</div>
			);
		}
		else {
			return (
				<div className="container">
					<header className="clearfix">
						<nav>
							<ul className="nav nav-pills pull-right">
								<li className="active"><Link to={`/`}>Home</Link></li>
								<li><Link to={`/add`}>Add a Feel</Link></li>
								<li><Link to={`/`} onClick={this.onLogOutPress.bind(this)}>Log Out</Link></li>
							</ul>
						</nav>
						<h3 className="text-muted">Feel Good About Yourself</h3>
						<h4 className="text-muted">Welcome, {this.props.currentUser}!</h4>
					</header>
					
					<FeelItem feel={this.props.currentFeel} />

					<div className="text-center">
						<button className="btn btn-lg btn-primary" type="button" onClick={this.onRandomPress.bind(this)}>Feel Good</button>
					</div>
				</div>
			);
		}
	}
};

let mapStateToProps = function(state, props) {
	return {
		feels: state.feels,
		currentFeel: state.feels[state.index] || {},
		index: state.index,
		isLoggedIn: state.isLoggedIn,
		currentUser: state.currentUser,
		currentPass: state.currentPass,
	}
};

export default connect(mapStateToProps)(Feels);
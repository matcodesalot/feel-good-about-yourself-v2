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
		console.log(`current index: ${this.props.index}`);
	}

	onLogOutPress() {
		this.props.dispatch(actions.destroySession());
	}

	render() {
		if(!this.props.isLoggedIn) {
			return (
				<div>
					<h1>You made it!</h1>
					<FeelItem feel={this.props.currentFeel} />
					<button className="button button-block" type="button" onClick={this.onRandomPress.bind(this)}>Random</button>
					<Link to={`/login`}>Log In</Link>
					<Link to={`/signup`}>Sign Up</Link>
				</div>
			);
		}
		else {
			return (
				<div>
					<h1>You made it!</h1>
					<h1>Welcome, {this.props.currentUser}!</h1>
					<FeelItem feel={this.props.currentFeel} />
					<button className="button button-block" type="button" onClick={this.onRandomPress.bind(this)}>Random</button>
					<Link to={`/add`}>Add a feel</Link>
					<Link to={`/`} onClick={this.onLogOutPress.bind(this)}>Log Out</Link>
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
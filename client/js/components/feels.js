import React, {Component} from 'react';
import {Router, Route, Link} from 'react-router';
import * as actions from '../redux/actions';
import {connect} from 'react-redux';
import FeelItem from './feel-item';
let myIndex = 1;

//{this.props.feels.map((feel, index) => <FeelItem key={index} index={index} feel={feel} />)}

class Feels extends Component {
	componentWillMount() {
		this.props.dispatch(actions.fetchFeelsAsync());
	}

	onPreviousPress() {
		this.props.dispatch(actions.nextFeel(-1));
		console.log(this.props.index);
	}

	onNextPress() {
		this.props.dispatch(actions.nextFeel(1));
		if(this.props.index >= this.props.feels.length - 1) {
			console.log("you've reached the end of the array");
			this.props.dispatch(actions.endOfFeels());
		}
		console.log(this.props.index);
	}

	onRandomPress() {
		this.props.dispatch(actions.randomFeel());
		console.log(this.props.index);
	}

	render() {
		return (
			<div>
				<h1>You made it!</h1>
				<FeelItem feel={this.props.currentFeel} />
				<button className="button button-block" type="button" onClick={this.onPreviousPress.bind(this)}>Previous</button>
				<button className="button button-block" type="button" onClick={this.onNextPress.bind(this)}>Next</button>
				<button className="button button-block" type="button" onClick={this.onRandomPress.bind(this)}>Random</button>
				<Link to={`/login`}>Log In</Link>
				<Link to={`/signup`}>Sign Up</Link>
			</div>
		);
	}
};

let mapStateToProps = function(state, props) {
	return {
		feels: state.feels,
		currentFeel: state.currentFeel,
		index: state.index,
	}
};

export default connect(mapStateToProps)(Feels);
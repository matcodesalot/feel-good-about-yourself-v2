import React, {Component} from 'react';
import * as actions from '../redux/actions';
import {connect} from 'react-redux';

class FeelItem extends Component {
	onLikePress() {
		this.props.dispatch(actions.updateLikesAsync(this.props.feel._id, this.props.feel.likes));
	}

	render() {
		if(!this.props.isLoggedIn) {
			return(
				<div className="hero">
					<h1>"{this.props.feel.feelText}"</h1>
					<p className="lead">-{this.props.feel.fromUser}</p>
					<p className="lead"><i className="fa fa-heart" aria-hidden="true"></i> {this.props.feel.likes}</p>
				</div>
			);
		}
		else {
			return(
				<div className="hero">
					<h1>"{this.props.feel.feelText}"</h1>
					<p className="lead">-{this.props.feel.fromUser}</p>
					<p className="lead"><i className="fa fa-heart" aria-hidden="true"></i> {this.props.feel.likes}</p>
					<button className="btn btn-lg btn-danger" type="button" onClick={this.onLikePress.bind(this)}>Like</button>
				</div>
			);
		}
	}
};

let mapStateToProps = function(state, props) {
	return {
		isLoggedIn: state.isLoggedIn,
	}
};

export default connect(mapStateToProps)(FeelItem);
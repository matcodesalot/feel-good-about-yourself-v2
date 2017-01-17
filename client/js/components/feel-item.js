import React, {Component} from 'react';
import * as actions from '../redux/actions';
import {connect} from 'react-redux';

class FeelItem extends Component {
	onLikePress() {
		this.props.dispatch(actions.updateLikesAsync(this.props.feel._id, this.props.feel.likes + 1));
	}

	render() {
		const likeButton = !this.props.hasPressed ? (<button className="button button-block" type="button" onClick={this.onLikePress.bind(this)}>Like</button>) : (<button className="button button-block" type="button" disabled >Like</button>);
		if(!this.props.isLoggedIn) {
			return(
				<div>
					<h2>"{this.props.feel.feelText}"</h2>
					<p>from {this.props.feel.fromUser}</p>
					<p>likes: {this.props.feel.likes}</p>
				</div>
			);
		}
		else {
			return(
				<div>
					<h2>"{this.props.feel.feelText}"</h2>
					<p>from {this.props.feel.fromUser}</p>
					<p>likes: {this.props.feel.likes}</p>
					{likeButton}
				</div>
			);
		}
	}
};

let mapStateToProps = function(state, props) {
	return {
		isLoggedIn: state.isLoggedIn,
		hasPressed: state.hasPressed,
	}
};

export default connect(mapStateToProps)(FeelItem);
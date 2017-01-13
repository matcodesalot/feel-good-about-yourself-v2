import React, {Component} from 'react';

export default class FeelItem extends Component {
	render() {
		return(
			<div>
				<h2>"{this.props.feel.feelText}"</h2>
				<p>from {this.props.feel.fromUser}</p>
				<p>likes: {this.props.feel.likes}</p>
			</div>
		);
	}
};
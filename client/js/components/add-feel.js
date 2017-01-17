import React, {Component} from 'react';
import * as actions from '../redux/actions';
import {connect} from 'react-redux';

class AddFeel extends Component {
	onSubmitPress(e) {
		e.preventDefault();
		this.props.dispatch(actions.addFeelAsync(this.refs.feel.value, {username: this.props.currentUser}));
		this.refs.feel.value = "";
		this.props.router.push("/");
	}

	render() {
		return(
			<div>
				<form className="go-bottom" action="/feels" method="post">
					<div>
						<input id="feel" name="feel" type="text" ref="feel" autoComplete="on" required />
						<label htmlFor="feel">Make the world happy!</label>
					</div>
					<button className="button button-block" type="submit" onClick={this.onSubmitPress.bind(this)}>Submit your feel!</button>
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
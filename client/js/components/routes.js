import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';

import Feels from './feels';
import SignUp from './sign-up';
import LogIn from './log-in';

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={Feels} />
		<Route path="/signup" component={SignUp} />
		<Route path="/login" component={LogIn} />
	</Router>
);

export default routes;
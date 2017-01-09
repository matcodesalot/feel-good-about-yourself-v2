import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './redux/store';
import Routes from './components/routes';

//<Provider store={store}>{Routes}</Provider>,

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
		<Routes />,
		document.getElementById('app')
	);
})

console.log(`Client running in ${process.env.NODE_ENV} mode`);
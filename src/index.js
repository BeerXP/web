import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import { HashRouter } from 'react-router-dom';
import './assets/base.scss';
import Main from './DemoPages/Main';
import configureStore from './config/configureStore';
import { Provider } from 'react-redux';

import config from './services/firebase';
import * as firebase from 'firebase/app';
import 'firebase/auth';

const store = configureStore();
const rootElement = document.getElementById('root');

// useEffect(() => {
// 	// Initialize Firebase
// 	firebase.initializeApp(config);
// });

const renderApp = Component => {
	ReactDOM.render(
		<Provider store={store}>
			<HashRouter>
				<Component />
			</HashRouter>
		</Provider>,
		rootElement
	);
};

renderApp(Main);

if (module.hot) {
	module.hot.accept('./DemoPages/Main', () => {
		const NextApp = require('./DemoPages/Main').default;
		renderApp(NextApp);
	});
}
serviceWorker.unregister();

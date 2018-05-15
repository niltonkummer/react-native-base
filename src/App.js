// Presentational
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Login from './components/Login/Login';
import Welcome from './components/Welcome/Welcome';

import { Provider } from 'react-redux';
import store from './store';


import './config/ReactoTronConfig';

class AppWrap extends Component {
	render() {
		
		return (
			<Provider store={store}>			
				
				<Welcome />
			</Provider>
		);
	}
}

const App = __DEV__ ? console.tron.overlay(AppWrap) : AppWrap;

export default App;
import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';


const App = () => (
	<div className="ui container">
		<Route exact path="/" component={HomePage} />
		<Route path="/login" component={LoginPage} />
	</div>
);
export default App;
import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Main from './components/Main';


const App = () => (
	<div className="ui container">
		<Route exact path="/" component={Main} />
		<Route path="/login" component={LoginPage} />
	</div>
);
export default App;
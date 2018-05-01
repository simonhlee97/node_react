import React from 'react';
import { Route } from 'react-router-dom';
import Main from './components/Main';


const App = () => (
	<div className="ui container">
		<Route exact path="/" component={Main} />
	</div>
);
export default App;
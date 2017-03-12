import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import Welcome from './components/Welcome';
import Register from './components/register/Register';


export default (
	<Route path="/" component={Layout}>
		<IndexRoute component={Welcome} />
		<Route path="register" component={Register} />
	</Route>
)
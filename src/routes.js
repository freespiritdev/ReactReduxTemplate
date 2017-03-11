import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import Welcome from './components/Welcome';
import RegisterForm from './components/register/RegisterForm';


export default (
	<Route path="/" component={Layout}>
		<IndexRoute component={Welcome} />
		<Route path="register" component={RegisterForm} />
	</Route>
)
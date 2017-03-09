import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import Welcome from './components/Welcome';


export default (
	<Route path="/" component={Layout}>
		<IndexRoute component={Welcome} />
	</Route>
)
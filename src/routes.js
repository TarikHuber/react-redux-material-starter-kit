import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import NotFound from './containers/Misc/NotFound';
import RestrictPage from './containers/Misc/RestrictPage';

import App from './containers/App/App';
import SignIn from './containers/Auth/SignIn';
import Dashboard from './containers/Dashboard/Dashboard';
import Foo from './containers/Foo/Foo';
import Bar from './containers/Bar/Bar';
import Counter from './containers/Counter/Counter';
import Responsive from './containers/Responsive/Responsive';
import MainSettings from './containers/Settings/MainSettings';
import GitUsers from './containers/GitUsers/GitUsers';
import Repos from './containers/Repos/Repos';

import Todo from './containers/Todo/Todo'

export default (
    <Route path="/" component={App}>
          <IndexRoute component={Dashboard}/>
		  <Route path="/signin" component={SignIn}/>
		  <Route path="/dashboard" component={Dashboard}/>
		  <Route path="/bar" component={Bar}/>
		  <Route path="/foo" component={Foo}/>
		  <Route path="/todo" component={Todo}/>
		  <Route path="/counter" component={Counter}/>
		  <Route component={RestrictPage}>
            <Route path="/responsive" component={Responsive} />
			<Route path="/gitusers" component={GitUsers} />
			<Route path="/repos" component={Repos} />
          </Route>
		  <Route path="/settings" component={MainSettings}/>
          <Route path="*" component={NotFound}/>
	</Route>
  
)
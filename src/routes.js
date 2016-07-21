import 'babel-polyfill';
import React from 'react';
import {Route, IndexRedirect, Redirect} from 'react-router';
import NotFound from './containers/Misc/NotFound';
import RestrictPage from './containers/Misc/RestrictPage';
import App from './containers/App/App';
import SignIn from './containers/Auth/SignIn';
import Dashboard from './containers/Dashboard/Dashboard';
import Foo from './components/BasicExamples/Foo';
import PropsExample from './containers/BasicExamples/PropsExample';
import PropsAndDispatchExample from './containers/BasicExamples/PropsAndDispatchExample';
import Counter from './containers/Counter/Counter';
import Responsive from './containers/Responsive/Responsive';
import MainSettings from './containers/Settings/MainSettings';
import GitUsers from './containers/GitUsers/GitUsers';
import Repos from './containers/Repos/Repos';
import Todo from './containers/Todo/Todo'
import config from './config';

export default(
  <Route path={config.app.root_path} component={App}>
    <IndexRedirect to={config.app.route_index}/>
    <Route path="app" component={Dashboard}/>
    <Redirect from="app" to="dashboard"/>
    <Route path="signin" component={SignIn}/>
    <Route path="dashboard" component={Dashboard}/>
    <Route path="foo" component={Foo}/>
    <Route path="props" component={PropsExample}/>
    <Route path="propsanddispatch" component={PropsAndDispatchExample}/>
    <Route path="todo" component={Todo}/>
    <Route path="counter" component={Counter}/>
    <Route component={RestrictPage}>
      <Route path="responsive" component={Responsive}/>
      <Route path="gitusers" component={GitUsers}/>
      <Route path="repos" component={Repos}/>
    </Route>
    <Route path="settings" component={MainSettings}/>
    <Route path="*" component={NotFound}/>
  </Route>

)

import { combineReducers } from 'redux';
import { titleReducer } from 'redux-title'
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import counter from './counter';
import intl from './intl';
import navigation from './navigation';
import filterNav from './filterNav';
import appStyle from './appStyle';
import dashboard from './dashboard';
import auth from './auth';
import user from './user';
import signIn from './signIn';
import todoDialog from './todoDialog';
import {usersByPage, selectedUsersPage, usersQuery } from './gitUsers';
import {selectedReposPage, reposByPage, reposQuery } from './repos';
import { routerReducer } from 'react-router-redux';

import {responsiveStateReducer} from 'redux-responsive';

const reducers = combineReducers({
  todos,
  title: titleReducer,
  visibilityFilter,
  counter,
  browser: responsiveStateReducer,
  intl,
  navigation,
  filterNav,
  appStyle,
  todoDialog,
  dashboard,
  usersByPage,
  selectedUsersPage,
  usersQuery,
  selectedReposPage,
  reposByPage,
  reposQuery,
  auth,
  user,
  signIn,
  routing: routerReducer,

})

export default reducers;

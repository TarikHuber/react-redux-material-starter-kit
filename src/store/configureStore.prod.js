import { createStore, applyMiddleware, combineReducers, compose, dispatch } from 'redux';
import { routerReducer,routerMiddleware } from 'react-router-redux';
import thunk  from 'redux-thunk';
import createLogger from 'redux-logger';
import { onIncrement, onDecrement } from '../reducers/index';
import reducers from '../reducers';
import {persistStore, autoRehydrate} from 'redux-persist';
import {responsiveStoreEnhancer} from 'redux-responsive';
import en from '../translations/en';
import { browserHistory } from 'react-router';
import { syncReduxAndTitle } from 'redux-title';
import config from '../config';
import DevTools from '../containers/DevTools/DevTools';
import {handleRehidration} from '../containers/Auth/SignIn'

export default function configureStore() {
  let store;
  
  
  const initState={
	  title:config.app.name,
	  
  };
  
  const middlewares=[	
		thunk, 
		routerMiddleware(browserHistory)
	];

  if(module.hot){
    store = createStore(reducers, initState, compose(
		  applyMiddleware(...middlewares),
		  autoRehydrate(),
		  responsiveStoreEnhancer,
		  DevTools.instrument(),
		  window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
  }else{
    store = createStore(reducers, initState, compose(
		applyMiddleware(...middlewares),
		autoRehydrate(),
		responsiveStoreEnhancer ,
		f=>f
    ));
  }


  syncReduxAndTitle(store);
  
  try{
	 persistStore(store, {whitelist : ['auth']}, ()=>{handleRehidration()});
  }catch(e){
	  
  }
  
  
  
  return store;
}
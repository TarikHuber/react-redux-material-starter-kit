import { createStore, applyMiddleware, combineReducers, compose, dispatch } from 'redux';
import { routerReducer,routerMiddleware } from 'react-router-redux';
import thunk  from 'redux-thunk';
import createLogger from 'redux-logger';
import { onIncrement, onDecrement } from '../reducers/index';
import reducers from '../reducers';
import {persistStore, autoRehydrate} from 'redux-persist';
import {responsiveStoreEnhancer} from 'redux-responsive';
import en from '../translations/en';
import { browserHistory } from 'react-router'
import DevTools from '../containers/DevTools/DevTools';

export default function configureStore() {
  let store;
  
  
  const middlewares=[	
		thunk, 
		routerMiddleware(browserHistory)
	];

  if(module.hot){
    store = createStore(reducers, undefined, compose(
		  applyMiddleware(...middlewares),
		  autoRehydrate(),
		  responsiveStoreEnhancer,
		  DevTools.instrument(),
		  window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
  }else{
    store = createStore(reducers, undefined, compose(
		applyMiddleware(...middlewares),
		autoRehydrate(),
		responsiveStoreEnhancer ,
		f=>f
    ));
  }


  
  
  try{
	 persistStore(store, {whitelist : ['auth']});
  }catch(e){
	  
  }
  
  
  
  return store;
}
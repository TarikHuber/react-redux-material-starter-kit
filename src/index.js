import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import Root from './containers/Root/Root.js'
import configureStore from './store/configureStore.js';
var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

const store = configureStore();

import '../static/main.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import '../static/favicon.ico';

render(< Root store = {
    store
}
history = {
    history
} />, document.getElementById('root'))

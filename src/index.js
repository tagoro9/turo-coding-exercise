import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { createHistory } from 'history';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';


import * as reducers from './client/reducers';
import App from './client/components/app/app';
import {SearchContainer} from './client/components/search/search';
import {ResultsContainer} from './client/components/results/results';

/**
 * Webapp entry point
 */

window.React = React;
window.ReactDOM = ReactDOM;

injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer,
}));

const store = createStoreWithMiddleware(reducer);

const history = createHistory();
syncReduxAndRouter(history, store);

const routes = (<Route component={App}>
  <Route path="/" component={SearchContainer}/>
  <Route path="/results" component={ResultsContainer}/>
</Route>);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>{routes}</Router>
  </Provider>,
  document.getElementById('root')
);

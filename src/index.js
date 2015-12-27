import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/app/app';
import Search from './components/search/search';
import Results from './components/results/results';

/**
 * Webapp entry point
 */

window.React = React;
window.ReactDOM = ReactDOM;

injectTapEventPlugin();

const routes = (<Route component={App}>
  <Route path="/" component={Search} />
  <Route path="/results" component={Results} />
</Route>);

ReactDOM.render(
    <Router>{routes}</Router>,
  document.getElementById('root')
);

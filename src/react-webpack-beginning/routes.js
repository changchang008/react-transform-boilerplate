import React from 'react';
import  { Route,IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
import About from './About';
import Account from './Account';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/account" component={Account} />
    <Route path="/about" component={About} />
  </Route>
);

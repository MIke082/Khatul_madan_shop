import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, Switch } from "react-router-dom";
import { history } from './components/history';
import List from './components/list/List';
import Cart from './components/cart/Cart';
import Header from './components/header/Header';


ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/header" component={Header} />
        <Route path="/list" component={List} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


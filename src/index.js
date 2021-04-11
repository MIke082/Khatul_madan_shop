import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router, Route, Switch } from "react-router-dom";
import { history } from './components/history';
import List from './components/list/List';
import Basket from './components/cart/Cart';
import Header from './components/header/Header';


ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/list" component={List} />
        <Route path="/basket" component={Basket} />
        <Route path="/header" component={Header} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


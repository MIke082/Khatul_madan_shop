import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router, Route, Switch } from "react-router-dom";
import ItemCard from './components/itemCard/ItemCard';
import { history } from './components/history';
import List from './components/list/List';
import Basket from './components/basket/Basket';


ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/list" component={List} />
        <Route path="/itemCard" component={ItemCard} />
        <Route path="/basket" component={Basket} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

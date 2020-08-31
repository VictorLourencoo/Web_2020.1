import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../components/Home/Home';

import Create from '../components/CRUD/Create';
import List from '../components/CRUD/List';
import Edit from '../components/CRUD/Edit';
import Delete from '../components/CRUD/Delete';

import 'bootstrap/dist/css/bootstrap.min.css';

import Main from '../components/Main/Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/home" component={Home} />
        <Route path="/create" component={Create} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/delete/:id" component={Delete} />
        <Route path="/list" component={List} />
      </Switch>
    </BrowserRouter>
  );
}

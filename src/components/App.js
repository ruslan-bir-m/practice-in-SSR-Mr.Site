import React from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import { IndexPage } from './IndexPage';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { NotFoundPage } from './NotFoundPage';

export const App = () => (
  <div>
    <header>
      <NavLink activeStyle = {{color: 'red'}} to="/main">Main</NavLink>
      <NavLink activeStyle = {{color: 'red'}} to="/page-1">Page 1</NavLink>
      <NavLink activeStyle = {{color: 'red'}} to="/page-2">Page 2</NavLink>
      <NavLink activeStyle = {{color: 'red'}} to="/page-3">Page 3 (not found)</NavLink>
    </header>
    <Switch>
      <Route exact path="/main" component={IndexPage} />
      <Route exact path="/page-1" component={Page1} />
      <Route exact path="/page-2" component={Page2} />
      <Redirect from="/" exact to="/main" />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;

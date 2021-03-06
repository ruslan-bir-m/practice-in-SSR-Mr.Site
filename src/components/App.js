import React from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import { IndexPage } from './IndexPage';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { NotFoundPage } from './NotFoundPage';
import Bank from './Bank';
import BankDetail from './BankDetail';
import Weather from './Weather';
import WeatherDetail from './WeatherDetail';

export const App = () => (
  <div>
    <header className="nav">
      <NavLink activeClassName = "active" to="/main">Main</NavLink>
      <NavLink activeClassName = "active" to="/page-1">Page 1</NavLink>
      <NavLink activeClassName = "active" to="/page-2">Page 2</NavLink>
      <NavLink activeClassName = "active" to="/page-3">Page 3 (not found)</NavLink>
      <NavLink activeClassName = "active" to="/bank">Exchange rates</NavLink>
      <NavLink activeClassName = "active" to="/weather">Weather</NavLink>
    </header>
    <Switch>
      <Route exact path="/main" component={IndexPage} />
      <Route exact path="/page-1" component={Page1} />
      <Route exact path="/page-2" component={Page2} />
      <Route exact path="/bank" component={Bank} />
      <Route exact path="/bank/:id" component={BankDetail} />
      <Route exact path="/weather" component={Weather} />
      <Route exact path="/weather/:id/" component={WeatherDetail} />
      <Redirect from="/" exact to="/main" />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;

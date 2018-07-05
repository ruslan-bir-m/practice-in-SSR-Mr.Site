import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <h1>404</h1>
        <h2>Page not found!</h2>
        <p>
          <NavLink to="/main">Main</NavLink>
        </p>
      </div>
    );
  }
}

export default NotFoundPage;

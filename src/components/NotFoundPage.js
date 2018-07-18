import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class NotFoundPage extends Component {
  componentWillMount() {
    const { staticContext } = this.props;
    if (staticContext) {
      staticContext.err404 = true;
    }
  }
  render() {
    return (
      <div>
        <h1>404</h1>
        <h2>Page not found!</h2>
        <p><img src="img/404.jpg" alt="error-404" /></p>
        <p>
          <NavLink to="/main">Main</NavLink>
        </p>
      </div>
    );
  }
}

export default NotFoundPage;

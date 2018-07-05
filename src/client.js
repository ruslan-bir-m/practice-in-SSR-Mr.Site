import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';

const AppClient = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

window.onload = () => {
  render(<AppClient />, document.getElementById('main'));
};
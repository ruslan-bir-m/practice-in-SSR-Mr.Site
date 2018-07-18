import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { App } from './components/App';

import {Provider} from 'react-redux';
import store from './store';

const app = new Express();
const server = new Server(app);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));

app.use(Express.static(path.join(__dirname, 'static')));

app.get('*', (req, res) => {
  let body = '';
  let status = 200;
  const context = {};
  body = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>,
  );
  if (context.err404) {
    status = 404;
  }
  return res.status(status).render('index', { body });
});

const port = process.env.PORT || 3002;
server.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.info(
    `
      Server running on http://localhost:${port}
      Date: ${Date()}
    `);
});

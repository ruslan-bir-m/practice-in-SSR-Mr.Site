import path from 'path';
import { Server } from 'http';
import Express from 'express';

const app = new Express();
const server = new Server(app);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));

app.get('*', (req, res) => {
  let body = 'Test Content text';
  let status = 200;

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

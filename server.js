const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/favicon.ico', (req, res) => {
      res.status(200).sendFile('favicon.ico', { root: `${__dirname}/static/` });
    });

    server.get('*', (req, res) => {
      if (req.headers.cookie) {
        const [key, val] = req.headers.cookie.split('=');
        const token = key === 'write-md-token' ? val : null;
        req.token = token;
      }
      handle(req, res);
    });

    const port = process.env.PORT || 3000;
    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });

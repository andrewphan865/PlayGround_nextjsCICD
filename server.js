const express = require('express');
const next = require('next');
const { parse } = require('url');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('*', (req, res) => {
    // Read environment variables at runtime
    const runtimeConfig = {
      APP_URL: process.env.APP_URL,
      // Add other environment variables here
    };

    // Inject runtimeConfig into the request
    req.runtimeConfig = runtimeConfig;

    // Handle the request with Next.js
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

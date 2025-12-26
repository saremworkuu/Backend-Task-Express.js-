const express = require('express');

const routes = require('./routes');

function createApp() {
  const app = express();

  // Built-in JSON body parsing
  app.use(express.json());

  // Base API route – all endpoints under /api
  app.use('/api', routes);

  // Healthcheck (optional, not part of MVC routes)
  app.get('/health', (req, res) => {
    res.json({ ok: true });
  });

  // 404 handler for unknown routes
  app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Route not found' });
  });

  // Generic error handler
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({ success: false, message: err.message || 'Internal Server Error' });
  });

  return app;
}

module.exports = createApp;

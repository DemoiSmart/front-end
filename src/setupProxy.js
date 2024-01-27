const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdWdpQGdtYWlsLmNvbSIsImlhdCI6MTcwNjI1MTUzMywiZXhwIjoxNzA2MjY5NTMzfQ._8cjju04AoWOROOkYWw_dIR1uPiYNCbOCIuj9yXRNwzPxmFBSZUYqqDvcSomjUr1Cd0xaUYlXMIrjyBSHxwQ4A`,
      },
    })
  );
};

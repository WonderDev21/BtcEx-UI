const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      pathRewrite: { '^/api': '' },
      target: 'http://localhost:3000', // backend server path
      changeOrigin: true,
    })
  );
};
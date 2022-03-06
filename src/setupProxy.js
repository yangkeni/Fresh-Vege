const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // 路由匹配
    createProxyMiddleware({
      target: "http://localhost:5000", // 目标代理
      changeOrigin: true,
    })
  );
};

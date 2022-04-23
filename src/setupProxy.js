const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  console.log("Setting up proxy...");
  app.use(
    "/api", // 路由匹配
    createProxyMiddleware({
      target: "https://www.mocky.io", // 目标代理
      changeOrigin: true,
    })
  );
};

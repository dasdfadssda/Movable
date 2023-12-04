const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/v1/search/", {
      target: "https://openapi.naver.com",
      changeOrigin: true,
    })
  );
};

// const { createProxyMiddleware } = require("http-proxy-middleware");

<<<<<<< HEAD
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/v1/search/", {
      target: "https://openapi.naver.com",
      changeOrigin: true,
    })
  );
};
=======
// module.exports = function (app) {
//   app.use(
//     createProxyMiddleware({
//       target: "https://openapi.naver.com",
//       changeOrigin: true,
//     })
//   );
// };
>>>>>>> caf97da5a69132d093081655d72f273e5a3971e6

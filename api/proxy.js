const { createProxyMiddleware } = require("http-proxy-middleware");
const { getTarget } = require("./config");

const proxy = createProxyMiddleware({
  target: getTarget().toString(),
  changeOrigin: true,
});

module.exports = (req, res) => {
  proxy(req, res);
};

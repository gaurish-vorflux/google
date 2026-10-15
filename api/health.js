const { getTarget } = require("./config");

module.exports = (_req, res) => {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.statusCode = 200;
  res.end(
    JSON.stringify({
      status: "ok",
      target: getTarget().origin,
      timestamp: new Date().toISOString(),
    })
  );
};

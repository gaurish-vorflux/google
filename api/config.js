const DEFAULT_TARGET = "https://www.google.com/";

function getTarget() {
  const configuredTarget = process.env.PROXY_TARGET_URL || DEFAULT_TARGET;
  const target = new URL(configuredTarget);

  if (!["http:", "https:"].includes(target.protocol)) {
    throw new Error("PROXY_TARGET_URL must use the http or https protocol");
  }

  return target;
}

module.exports = { getTarget };

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/pat0245.github.io/" : "",
};

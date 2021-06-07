require("dotenv").config();

module.exports = {
  experimental: {
    optimizeFonts: true,
  },
  trailingSlash: true,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": __dirname,
    };
    return config;
  },
  env: {
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    FB_APP_ID: process.env.FB_APP_ID,
  },
};

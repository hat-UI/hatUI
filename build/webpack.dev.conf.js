const baseConfig = require("./webpack.base.conf");
const merge = require("webpack-merge");

const devConfig = merge(baseConfig, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              prependData: `@import "./src/styles/index.scss"; `
            }
          }
        ]
      }
    ]
  }
});
module.exports = devConfig;

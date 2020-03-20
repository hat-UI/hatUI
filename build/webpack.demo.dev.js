const baseConfig = require("./webpack.demo.base");
const path = require("path");
const config = require("../config");
const HotModuleReplacementPlugin = require("webpack/lib/HotModuleReplacementPlugin");
const merge = require("webpack-merge");

const devConfig = merge(baseConfig, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              prependData: `@import "./src/styles/index.scss"; `
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [new HotModuleReplacementPlugin()],
  devServer: {
    ...config.devServer
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000
  }
});
module.exports = devConfig;

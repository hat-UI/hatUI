const baseConfig = require("./webpack.demo.base");
const path = require("path");
const config = require("../config");
const HotModuleReplacementPlugin = require("webpack/lib/HotModuleReplacementPlugin");
const merge = require("webpack-merge");
const { getScssVariable } = require("./utils")
const globalVariable = `${getScssVariable()} @import "./src/styles/index.scss";`

const devConfig = merge(baseConfig, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          "style-loader", 
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            // 这句只有在引用没有打包的组件库时需要加入,引用min.js后缀，不需要。主要是为了方便调试
            options: {
              prependData: globalVariable
            }
          }
        ]
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

const path = require("path");
const merge = require("webpack-merge");
const config = require("../config");
const baseCongfig = require("./webpack.base.conf")
const nodeExternals = require('webpack-node-externals')
const isCoverage = process.env.NODE_ENV === 'coverage';
const { getScssVariable } = require("./utils")
const golbalVariable = `${getScssVariable()} @import "./src/styles/index.scss";`

const webpackConfig = merge(baseCongfig, {
  mode: 'production',
  devtool: 'inline-cheap-module-source-map',
  entry: path.resolve(__dirname, "../src/index.js"),
  output: {
    filename: `${config.packageName}.min.js`,
    path: path.resolve(__dirname, "../dist"),
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.(scss|sass|css)$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            prependData: golbalVariable
          }
        }
      ]
    }]
  }
});

isCoverage && webpackConfig.module.rules.unshift({
  test: /\.(js|ts)/,
  use: {
    loader: 'istanbul-instrumenter-loader',
    options: { esModules: true }
  },
  include: path.resolve(__dirname, '../src/packages/')
})

module.exports = webpackConfig
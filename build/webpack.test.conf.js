const path = require("path");
const merge = require("webpack-merge");
const config = require("../config");
const baseCongfig = require("./webpack.base.conf")
const nodeExternals = require('webpack-node-externals')
module.exports = merge(baseCongfig,{
    mode: 'production',
    devtool: 'inline-cheap-module-source-map',
    entry: path.resolve(__dirname, "../src/index.js"),
    output: {
      filename:`${config.packageName}.min.js`,
      path: path.resolve(__dirname, "../dist"),
      libraryTarget: 'umd',
      globalObject: 'this',
      umdNamedDefine: true,
      devtoolModuleFilenameTemplate: '[absolute-resource-path]',
      devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    },
    externals: [nodeExternals()]
});
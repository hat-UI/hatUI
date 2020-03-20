const path = require("path");
const baseConfig = require("./webpack.base.conf");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const config = require("../config/index");
const merge = require("webpack-merge");
const pkgConfigs = require("../src/config.json");
let entry = {};
pkgConfigs.packages.map(item => {
  const name = item.name;
  const pakagePath = path.join(__dirname, `../src/packages/${name}/index.js`);
  entry[name] = pakagePath;
});
module.exports = merge(baseConfig, {
  mode: "production",
  entry,
  output: {
    path: path.resolve(__dirname, "../dist/packages/"),
    publicPath: "./assets/",
    filename: "[name]/[name].js",
    library: "[name]",
    libraryTarget: "umd",
    globalObject: "this",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              prependData: `@import "./src/styles/index.scss"; `
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name]/[name].css`,
      chunkFilename: "[id].css"
    }),
    new CompressionWebpackPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      threshold: 10240,
      minRatio: 0.8
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessorOptions: {
        map: {
          inline: false,
          annotation: false
        }
      }
    })
  ],
  optimization: {
    usedExports: true,
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {}
      })
    ]
  }
});
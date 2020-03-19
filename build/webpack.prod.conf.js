const baseConfig = require("./webpack.base.conf");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const config = require("../config/index")
const merge = require("webpack-merge");

module.exports = merge(baseConfig, {
  mode: "production",
  devtool: false,
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
      filename: `${config.packageName}.min.css`,
      chunkFilename: "[id].css"
    }),
    new CompressionWebpackPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      threshold: 10240,
      minRatio: 0.8
    }),
    new OptimizeCSSAssetsPlugin({
      // cssProcessorOptions: true ? { map: { inline: false } } : {}
      cssProcessorOptions:  {
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
        // cssProcessorOptions: true? {map: { inline: false }}:{}
        cssProcessorOptions: {}
      })
    ],
    // splitChunks: {
    //   chunks: "all",
    //   minChunks: 1,
    //   minSize: 0
    // }
  }
});

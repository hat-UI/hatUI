const baseConfig = require("./webpack.demo.base");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const merge = require("webpack-merge");
const { getScssVariable } = require("./utils")
const globalVariable = `${getScssVariable()} @import "./src/styles/index.scss";`

module.exports = merge(baseConfig, {
  mode: "production",
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            // 这句只有在引用没有打包的组件库时需要加入,引用min.js后缀，不需要。主要是为了方便调试
            options: {
              prependData: globalVariable
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "static/css/[name]_[chunkhash:8].css",
      chunkFilename: "[id].css"
    }),
    new CompressionWebpackPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      threshold: 10240,
      minRatio: 0.8
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessorOptions: true ? { map: { inline: true } } : {}
    })
  ],
  optimization: {
    usedExports: true,
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: true ? { map: { inline: true } } : {}
      })
    ],
    splitChunks: {
      chunks: "all",
      minChunks: 1,
      minSize: 0
    }
  }
});

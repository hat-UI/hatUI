const path = require("path");
const baseConfig = require("./webpack.base.conf");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const config = require("../config/index")
const merge = require("webpack-merge");
const rimraf = require("rimraf");
const px2rem = require('postcss-px2rem');


rimraf(`./dist/${config.packageName}.min.css`,(err) => {
  if(err) console.log(err)
})
rimraf(`./dist/${config.packageName}.min.js`,(err) => {
  if(err) console.log(err)
})

module.exports = merge(baseConfig, {
  mode: "production",
  devtool: false,
  entry: path.resolve(__dirname, "../src/index.js"),
  output: {
    filename:`${config.packageName}.min.js`,
    path: path.resolve(__dirname, "../dist"),
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcss: function() {
                return [px2rem({remUnit: 75})];
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              prependData: `@import "./src/styles/index.scss";`
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
      cssProcessorOptions:  {
        map: {
          inline: true,
          annotation: true
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

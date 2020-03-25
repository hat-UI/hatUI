const path = require("path");
const HappyPack = require("happypack");
const os = require("os")
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const progressBarPlugin = require("progress-bar-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const config = require("../config/index")

const webpackBaseConfig = {
  resolve: {
    modules: ["node_modules"],
    alias: {
      "@": path.resolve(__dirname, "../src")
    },
    extensions: [".vue", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["happypack/loader?id=babel"],
        exclude: path.resolve(__dirname, "../node_modules")
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: ["happypack/loader?id=image"]
      },
      {
        test: /\.(eot|otf|ttf|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [ 'file-loader' ]
      }
    ]
  },
  plugins: [
    new HappyPack({
      id: "image",
      loaders: ["url-loader"],
      threadPool: happyThreadPool
    }),
    new HappyPack({
      id: "babel",
      loaders:[
        {
          loader:'babel-loader',
          options: {
            presets: ['@babel/env']
          }   
        }
      ],
      threadPool: happyThreadPool
    }),
    new progressBarPlugin(),
    new VueLoaderPlugin()
  ]
};
module.exports = webpackBaseConfig;

const path = require("path");
const HappyPack = require("happypack");
const happyThreadPool = HappyPack.ThreadPool({ size: 5 });
const progressBarPlugin = require("progress-bar-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const webpackBaseConfig = {
  entry: path.resolve(__dirname, "../src/index.js"),
  output: {
    filename:"hat.min.js",
    path: path.resolve(__dirname, "../dist")
  },
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
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
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
            presets: ['env']
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

const path = require("path");
const HappyPack = require("happypack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const os = require("os")
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");
const DllReferencePlugin = require("webpack/lib/DllReferencePlugin");
const progressBarPlugin = require("progress-bar-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const config = require("../config");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { isProduction } = require("./utils");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");



const webpackBaseConfig = {
  entry: path.resolve(__dirname, "../sites/demo/src/main.js"),
  output: {
    filename: "[name]_[hash:16].js",
    path: path.resolve(__dirname, "../sites/demo/dist")
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
      },
      {
        test: /\.(eot|otf|ttf|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [ 'file-loader' ]
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
            presets: ['@babel/env']
          }   
        }
      ],
      threadPool: happyThreadPool
    }),
    new progressBarPlugin(),
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
      title: "vue-template",
      template: path.resolve(__dirname, "../sites/demo/public/index.html"),
      inject: "body",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    })
  ]
};

if (config.isDll) {
  webpackBaseConfig.plugins.push(
    new DllReferencePlugin({
      manifest: require("../sites/demo/dll/framework.manifest.json")
    })
  );
  webpackBaseConfig.plugins.push(
    new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, "../sites/demo/dll/framework.dll.js") // 对应的 dll 文件路径
    })
  );
}
if (!isProduction()) {
  console.log(config)
  webpackBaseConfig.plugins.push(
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `Your application is running here: http://${config.devServer.host}:${config.devServer.port}`
        ]
      },
      clearConsole: true
    })
  );
}
module.exports = webpackBaseConfig;

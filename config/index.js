const path = require("path");
const portfinder = require('portfinder')
const devServerConfig = {
  devServer: {
    host: 'localhost',
    port: null,
    hot: true,
    open: true,
    compress: true,
    historyApiFallback: true,
    overlay: false,
    contentBase: path.resolve(__dirname, '../dist'),
    quiet: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    }
  },
  isDll: true,
  packageName: 'hat'
}

function setPort() {
  portfinder.getPort({
    port: 8080
  }, (err, port) => {

    if (err) {
      return;
    }
    //端口被占用时就重新设置evn和devServer的端口
    devServerConfig.devServer.port = port;
  });
}
setPort()
module.exports = devServerConfig
const path = require('path');
const commonConfig = require('./webpack.common');

require('dotenv').config();
const serverPort = process.env.WEBPACK_DEV_SERVER_PORT || 9192;
const backendServer = process.env.API_SERVER;

const devConfig = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: serverPort,
    proxy: {
      '/api': backendServer,
    },
  },
  devtool: 'source-map',
};
module.exports = Object.assign({}, commonConfig, devConfig);

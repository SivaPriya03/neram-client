const path = require('path');

const commonConfig = require('./webpack.common');
const cwd = process.cwd();
const prodConfig = {
  mode: 'production',
  output: {
    path: path.resolve(cwd, 'dist'),
    filename: '[name].[contenthash].js',
  },
};

module.exports = Object.assign({}, commonConfig, prodConfig);

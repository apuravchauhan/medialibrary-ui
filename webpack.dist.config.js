var webpack = require('webpack');
var path    = require('path');
var config  = require('./webpack.config');
var WebpackStrip = require('strip-loader');
config.module.loaders.push(
    { test: /\.js$/, loader: WebpackStrip.loader('debug', 'console.log', 'alert') }
);
config.output = {
  filename: '[name].bundle.js',
  publicPath: '/public/',
  path: path.resolve(__dirname, 'dist')
};

config.plugins = config.plugins.concat([

  // Reduces bundles total size
  new webpack.optimize.UglifyJsPlugin({
    mangle: {

      // You can specify all variables that should not be mangled.
      // For example if your vendor dependency doesn't use modules
      // and relies on global variables. Most of angular modules relies on
      // angular global variable, so we should keep it unchanged
      except: ['$super', '$', 'exports', 'require', 'angular']
    }
  })
]);

module.exports = config;

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

var baseConfig = require('./webpack.config.base');

var config = Object.create(baseConfig);

config.devtool = 'source-map';
config.entry = [
  './src/index'
];
config.output.filename = 'bundle.[hash].js';
config.module.loaders.push(
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
  }
);
config.plugins = config.plugins.concat([
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new ExtractTextPlugin('style.[contenthash].css', { allChunks: true }),
  new HtmlWebpackPlugin({filename: '../index.html'}),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
]);

module.exports = config;

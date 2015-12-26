var path = require('path');

var config = {
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: [path.join(__dirname, 'src')]
      }
    ],
    preLoaders: [
      {
        test: /\.js$/,
        exclude: [
          path.join(__dirname, 'src/tests.index.js'),
          /(__tests__|node_modules)/
        ],
        loader: 'isparta-instrumenter'
      }
    ]
  }
};

module.exports = config;

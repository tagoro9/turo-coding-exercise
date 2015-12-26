var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, 'dist/static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: [path.join(__dirname, 'src')]
      },
      {
        test: 'png|jpg|jpeg|gif|svg',
        loader: 'url-loader?limit=10000'
      }
    ]
  },
  postcss: [
    require('autoprefixer'),
    require('postcss-color-rebeccapurple')
  ],

  plugins: []
};

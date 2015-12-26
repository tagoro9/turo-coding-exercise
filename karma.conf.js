var webpack = require('webpack');
var webpackConfig = require('./webpack.config.test');

webpackConfig.module.preLoaders = null;

module.exports = function(config) {

  config.set({

    basePath: '',
    frameworks: ['mocha'],

    files: [
      'src/tests.index.js'
    ],

    preprocessors: {
      'src/tests.index.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true,
      stats: {
        colors: true
      }
    },

    reporters: ['spec'],

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,


    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-spec-reporter',
      'karma-webpack'
    ]

  });

};

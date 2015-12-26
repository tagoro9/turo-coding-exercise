var webpack = require('webpack');
var webpackConfig = require('./webpack.config.test');

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

    reporters: ['spec', 'coverage'],

    coverageReporter: {
      dir: 'coverage/',
      instrumenters: { isparta : require('isparta') },
      instrumenter: {
        '**/*.js': 'isparta'
      },
      reporters: [
        { type: 'lcovonly', subdir: '.', file: 'lcov.info' },
        { type: 'html', subdir: 'html' }
      ]
    },

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,
    singleRun: true,


    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-spec-reporter',
      'karma-webpack'
    ]


  });

};

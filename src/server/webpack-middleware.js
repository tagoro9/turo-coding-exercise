var webpack = require('webpack');
var config = require('../../webpack.config.dev');

/**
 * Function that loads webpack dev server into
 * an express app
 * @param app Express app
 */
module.exports = function(app)  {

  var compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));

};

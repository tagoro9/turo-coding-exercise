var express = require('express');
var path = require('path');

var config = require('./src/server/config');
var hotWireProxy = require('./src/server/hotwire-proxy');
var webpackMiddleware = require('./src/server/webpack-middleware');

/**
 * Application server. It proxies API calls to
 * HotWire and serves the web app (pre compiled one or
 * using webpack dev server depending on the execution
 * environment)
 */
var app = express();

// Webpack middleware and dist folder prefix
var prefix = 'dist/';
if (process.env.NODE_ENV !== 'production') {
  webpackMiddleware(app);
  prefix = '';
}

// HotWire proxy
hotWireProxy(app, config.hotWire);

// Static files
app.use('/static', express.static(prefix + 'static'));

// Always return index.html (routing is done in the webapp)
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, prefix + 'index.html'));
});

app.listen(process.env.OPENSHIFT_NODEJS_PORT || config.port, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});


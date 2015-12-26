var R = require('ramda');
var request = require('request');

/**
 * Create a proxy to HotWire API calls
 * @param app Express App
 * @param {Object} config HotWire application configuration
 * @param {string} config.mountPoint Url where to mount the proxy
 * @param {string} config.api.root URL to HotWire API
 * @param {Array} config.api.defaultParameters Preset parameters
 * @param {Array} config.api.parameters List of mandatory parameters to send
 * in the requests
 */
module.exports = function(app, config) {

  app.get(config.mountPoint + 'search', function(req, res) {
    // Check that all mandatory parameters were sent. This avoids unnecessary API calls
    if (!req.query || !R.all(R.contains(R.__, R.keys(req.query)), config.api.parameters)) {
      return res.status(401).json({message: 'Some parameters are missing'}).end();
    }
    // Request to HotWire
    request(config.api.root, {
      qs: R.merge(req.query, config.api.defaultParameters)
    }, function (error, response, body) {
      // Check errors
      if (error || response.statusCode !== 200) {
        return res.status(response.statusCode).json({message: 'Something went wrong'}).end();
      }
      // Get JSON response
      // TODO catch parse errors
      var parsedBody = JSON.parse(body);
      // Check if there are errors in response
      if (parsedBody['Errors'] && (parsedBody['Errors'].length > 0 || (parsedBody['Errors'].length === undefined && R.is(Object, parsedBody['Errors'])))) {
        return res.status(401).json({
          code: parsedBody['StatusCode'],
          message: 'The request was not correct',
          errors: R.map(R.compose(R.toString, R.prop('ErrorMessage')), R.values(parsedBody['Errors']))
        });
      }
      // Send data
      res.json(parsedBody).end();
    });
  });

};

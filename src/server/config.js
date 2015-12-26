/**
 * Server configuration
 */
module.exports = {
  hotWire: {
    mountPoint: '/api/',
    api: {
      root: 'http://api.hotwire.com/v1/search/car',
      defaultParameters: {
        apikey: 'ae8zfse5cwbqj8xn5aa7xud6',
        format: 'JSON'
      },
      parameters: [
        'dest',
        'startdate',
        'enddate',
        'pickuptime',
        'dropofftime'
      ]
    }
  },
  port: 3000
};

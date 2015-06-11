var utils = require('../utils.js'),
    fmp = require('./findmypast.js');

var defaultConfig = {
  birthRange: 2,
  deathRange: 2,
  otherRange: 2
};

module.exports = {
  id: 'findmypast.com',
  name: 'findmypast.com',
  url: 'http://www.findmypast.com',
  search: function(config, data){
    config = utils.defaults(config, defaultConfig);
    return fmp(config, data, 'com');
  }
};
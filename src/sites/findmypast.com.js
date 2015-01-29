var utils = require('../utils.js'),
    fmp = require('./findmypast.js');

var defaultConfig = {
  birthRange: 2,
  deathRange: 2,
  otherRange: 2
};

module.exports = function(config, data){
  config = utils.defaults(config, defaultConfig);
  return fmp(config, data, 'com');
};
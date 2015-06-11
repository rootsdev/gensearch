var utils = require('../utils.js'),
    fmp = require('./findmypast.js');

var defaultConfig = {
  birthRange: 2,
  deathRange: 2,
  otherRange: 2
};

module.exports = {
  id: 'findmypast.co.uk',
  name: 'findmypast.co.uk',
  url: 'http://www.findmypast.co.uk',
  search: function(config, data){
    config = utils.defaults(config, defaultConfig);
    return fmp(config, data, 'co.uk');
  }
};
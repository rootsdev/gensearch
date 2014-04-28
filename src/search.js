var utils = require('./utils.js'),
    config = {};

var sites = {
  'ancestry': require('./sites/ancestry.js'),
  'archives': require('./sites/archives.js'),
  'billiongraves': require('./sites/billiongraves.js'),
  'familysearch': require('./sites/familysearch.js'),
  'findagrave': require('./sites/findagrave.js'),
  'findmypast': require('./sites/findmypast.js'),
  'fold3': require('./sites/fold3.js'),
  'genealogybank': require('./sites/genealogybank.js'),
  'geni': require('./sites/geni.js'),
  'newspapers': require('./sites/newspapers.js'),
  'werelate': require('./sites/werelate.js'),
  'worldvitalrecords': require('./sites/worldvitalrecords.js')
};

var search = module.exports = function(site, person, opts){
  if(sites[site]){
    return sites[site](utils.extend({}, config, opts), person);
  }
};

search.config = function(newConfig){
  config = newConfig;
};

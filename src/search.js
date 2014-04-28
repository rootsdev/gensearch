var config = {};

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

var search = module.exports = function(site, person){
  return sites[site] ? sites[site](config, person) : undefined;
};

search.config = function(newConfig){
  config = newConfig;
};

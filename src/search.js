var config = {};

var sites = {
  'ancestry': require('./sites/ancestry.js'),
  'archives': require('./sites/archives.js'),
  'billiongraves': require('./sites/billiongraves.js'),
  'familysearch': require('./sites/familysearch.js'),
  'findagrave': require('./sites/findagrave.js')
};

var search = module.exports = function(site, person){
  return sites[site] ? sites[site](config, person) : undefined;
};

search.config = function(newConfig){
  config = newConfig;
};

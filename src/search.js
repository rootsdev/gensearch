var config = {};

var sites = {
  'ancestry': require('./sites/ancestry.js'),
  'familysearch': require('./sites/familysearch.js'),
  'archives': require('./sites/archives.js')
};

var search = module.exports = function(site, person){
  return sites[site] ? sites[site](config, person) : undefined;
};

search.config = function(newConfig){
  config = newConfig;
};

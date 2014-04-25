var config = {};

var sites = {
  'familysearch': require(__dirname + '/sites/familysearch.js')
};

var search = module.exports = function(site, person){
  return sites[site](config, person);
};

search.config = function(newConfig){
  config = newConfig;
};

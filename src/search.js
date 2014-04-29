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

// Main search link generation function
var search = module.exports = function(site, person, opts){
  if(sites[site]){
    return sites[site](utils.extend({}, config[site], opts), person);
  }
};

/**
 * Set global config for a site. May be used in two ways:
 * config('site', {options});
 * config({'site': options});
 */
search.config = function(site, siteConfig){
  // config('site', {options});
  if(utils.isString(site) && utils.isObject(siteConfig)){
    config[site] = utils.extend({}, config[site], siteConfig);
  } 
  
  // config({site: options});
  else if(site && utils.isUndefined(siteConfig)) {
    var newConfig = site;
    utils.each(newConfig, function(siteConfig, site){
      config[site] = utils.extend({}, config[site], siteConfig);
    });
  } 
  
  // config()
  else {
    return config;
  }
};

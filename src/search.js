var utils = require('./utils.js'),
    config = {};

// We have to explicitly list the sites, instead of
// dynamically loading, so that browserify can see them
var sites = {
  'americanancestors': require('./sites/americanancestors.js'),
  'ancestry': require('./sites/ancestry.js'),
  'archives': require('./sites/archives.js'),
  'billiongraves': require('./sites/billiongraves.js'),
  'chroniclingamerica': require('./sites/chroniclingamerica.js'),
  'familysearch': require('./sites/familysearch.js'),
  'findagrave': require('./sites/findagrave.js'),
  'findmypast.co.uk': require('./sites/findmypast.co.uk.js'),
  'findmypast.com': require('./sites/findmypast.com.js'),
  'fold3': require('./sites/fold3.js'),
  'geneanet.en': require('./sites/geneanet.en.js'),
  'genealogieonline': require('./sites/genealogieonline.js'),
  'genealogybank': require('./sites/genealogybank.js'),
  'geni': require('./sites/geni.js'),
  'google': require('./sites/google.js'),
  'nlatrove': require('./sites/nlatrove.js'),
  'mocavo': require('./sites/mocavo.js'),
  'myheritage': require('./sites/myheritage.js'),
  'newspapers': require('./sites/newspapers.js'),
  'openarchives': require('./sites/openarchives.js'),
  'usgenweb': require('./sites/usgenweb.js'),
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

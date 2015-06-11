var utils = require('./utils.js'),
    config = {};

// We have to explicitly list the sites, instead of
// dynamically loading, so that browserify can see them
var siteList = [
  require('./sites/americanancestors.js'),
  require('./sites/ancestry.js'),
  require('./sites/archives.js'),
  require('./sites/billiongraves.js'),
  require('./sites/chroniclingamerica.js'),
  require('./sites/familysearch.js'),
  require('./sites/findagrave.js'),
  require('./sites/findmypast.co.uk.js'),
  require('./sites/findmypast.com.js'),
  require('./sites/fold3.js'),
  require('./sites/geneanet.en.js'),
  require('./sites/genealogieonline.js'),
  require('./sites/genealogybank.js'),
  require('./sites/gengophers.js'),
  require('./sites/geni.js'),
  require('./sites/google.js'),
  require('./sites/nlatrove.js'),
  require('./sites/mocavo.js'),
  require('./sites/myheritage.js'),
  require('./sites/newspapers.js'),
  require('./sites/openarchives.js'),
  require('./sites/usgenweb.js'),
  require('./sites/werelate.js'),
  require('./sites/wikitree.js'),
  require('./sites/worldvitalrecords.js')
];

// But what we really want is to have the sites in a map
// keyed by id for easy access
var siteMap = {};
utils.each(siteList, function(site){
  siteMap[site.id] = site;
})

// Main search link generation function
var gensearch = module.exports = function(site, person, opts){
  if(siteMap[site]){
    return siteMap[site].search(utils.extend({}, config[site], opts), person);
  }
};

/**
 * Set global config for a site. May be used in two ways:
 * config('site', {options});
 * config({'site': options});
 */
gensearch.config = function(site, siteConfig){
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

/**
 * Retrieve a list of available sites.
 */
gensearch.sites = function(){
  return siteList.slice();
};
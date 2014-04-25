var path = require('path');

var siteList = [
  'familysearch'
];

var config = {},
    sites = {};

for(var i = 0; i < siteList.length; i++){
  var siteName = siteList[i];
  sites[siteName] = require(path.join(__dirname, 'sites', siteName + '.js'));
}

var search = module.exports = function(site, person){
  return sites[site](config, person);
};

search.config = function(newConfig){
  config = newConfig;
};

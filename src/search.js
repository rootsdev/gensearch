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

module.exports = {
  
  config: function(newConfig){
    config = newConfig;
  },
  
  url: function(site, person){
    return sites[site](config, person);
  }
  
};

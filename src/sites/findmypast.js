var utils = require('../utils.js');

var defaultConfig = {
  birth_offset: 2,
  death_offset: 2
};

module.exports = function(config, data){

  config = utils.defaults(config, defaultConfig);

  // TODO: allow for .com or other fmp sites
  
  var baseUrl = 'http://search.findmypast.co.uk/search/world-records?firstname_variants=true';
  var query = '';
  
  // Name
  if(data.givenName) {
    query = utils.addQueryParam(query, 'firstname', data.givenName);
  }
  if(data.familyName) {
    query = utils.addQueryParam(query, 'lastname', data.familyName);
  }
  
  // TODO: birth and death; need ability to specify which one
  
  // Birth
  // keywordsplace=birthplace
  // yearofbirth=birthyear
  // yearofbirthoffset=config.birth_offset
  
  // Death
  // keywordsplace=deathplace
  // yearofdeath=deathyear
  // yearofdeathoffset=config.death_offset
  
  return baseUrl + query;
  
};
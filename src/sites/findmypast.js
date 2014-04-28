var utils = require('../utils.js');

var defaultConfig = {
  FINDMYPAST_BIRTH_OFFSET: 2,
  FINDMYPAST_DEATH_OFFSET: 2
};

module.exports = function(config, data){

  config = utils.defaults(config, defaultConfig);

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
  // yearofbirthoffset=config.FINDMYPAST_BIRTH_OFFSET
  
  // Death
  // keywordsplace=deathplace
  // yearofdeath=deathyear
  // yearofdeathoffset=config.FINDMYPAST_DEATH_OFFSET
  
  return baseUrl + query;
  
};
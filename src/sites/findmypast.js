var utils = require('../utils.js');

var defaultConfig = {
  birthRange: 2,
  deathRange: 2,
  otherRange: 2
};

module.exports = function(config, data){

  config = utils.defaults(config, defaultConfig);

  // TODO
  // * allow for .com or other fmp sites
  // * allow for record category
  // * restrict to record set(s)?
  
  var baseUrl = 'http://search.findmypast.co.uk/search/world-records?firstname_variants=true';
  var query = '';
  
  // Name
  if(data.givenName) {
    query = utils.addQueryParam(query, 'firstname', data.givenName);
  }
  if(data.familyName) {
    query = utils.addQueryParam(query, 'lastname', data.familyName);
  }
  
  // Birth
  if(config.event === 'birth'){
    
    if(data.birthDate){
      query = utils.addQueryParam(query, 'yearofbirth', utils.getYear(data.birthDate));
    }
    
    if(data.birthPlace){
      query = utils.addQueryParam(query, 'keywordsplace', data.birthPlace);
    }
    
    query = utils.addQueryParam(query, 'yearofbirth_offset', config.birthRange);
  }
  
  // Death
  else if(config.event === 'death'){
    
    if(data.deathDate){
      query = utils.addQueryParam(query, 'yearofdeath', utils.getYear(data.deathDate));
    }
    
    if(data.deathPlace){
      query = utils.addQueryParam(query, 'keywordsplace', data.deathPlace);
    }
    
    query = utils.addQueryParam(query, 'yearofdeath_offset', config.deathRange);
  }
  
  // Other event
  else if(config.event === 'other'){
  
    if(config.otherDate){
      query = utils.addQueryParam(query, 'eventyear', utils.getYear(config.otherDate));
    }
    
    if(config.otherPlace){
      query = utils.addQueryParam(query, 'keywordsplace', config.otherPlace);
    }
    
    query = utils.addQueryParam(query, 'eventyear_offset', config.otherRange);
  
  }
  
  return baseUrl + query;
  
};
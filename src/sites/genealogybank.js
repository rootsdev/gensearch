var utils = require('../utils.js');

var defaultConfig = {
  lifespan: 90,
  date_padding: 5
};

module.exports = function(config, data){

  config = utils.defaults(config, defaultConfig);

  var baseUrl = 'http://www.genealogybank.com/gbnk/?dateType=range';
  var query = '';
  
  // Name
  query = utils.addQueryParam(query, 'fname', data.givenName);
  query = utils.addQueryParam(query, 'lname', data.familyName);
  
  //
  // Year range
  //
  
  var birthYear = utils.getYearInt(data.birthDate), 
      deathYear = utils.getYearInt(data.deathDate);
  
  // We have a birth date
  if(birthYear) {
    
    // We also have death date so add padding
    if(deathYear){
      deathYear += config.date_padding;
    } 
    
    // We have a birth date but not a death date, so add
    // the lifespan value to the birth year
    else {
      deathYear = birthYear + config.lifespan;
    }
    
    // Pad the birth year
    birthYear -= config.date_padding
  } 
  
  // We have a death year but not a birth year
  else if(deathYear) {
    
    // Subtract lifespan value from deathYear
    birthYear = deathYear - config.lifespan;
    
    // Pad the death year
    deathYear += config.date_padding;
  }
  
  if(birthYear && deathYear){
    query = utils.addQueryParam(query, 'rgfromDate', birthYear);
    query = utils.addQueryParam(query, 'rgtoDate', deathYear);
  }
  
  return baseUrl + query;

};

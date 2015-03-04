var utils = require('../utils.js');

module.exports = function(config, data){

  var url = 'http://www.americanancestors.org/search/database-search?';
  var params = {};
  
  if(data.givenName){
    params.firstname = data.givenName;
  }
  
  if(data.familyName){
    params.lastname = data.familyName;
  }
  
  if(data.birthDate){
    params.fromyear = utils.getYear(data.birthDate);
  }
  
  if(data.deathDate){
    params.toyear = utils.getYear(data.deathDate);
  }
  
  if(data.birthPlace){
    params.location = data.birthPlace;
  } else if(data.deathPlace){
    params.location = data.deathPlace;
  }
  
  return url + utils.queryString(params);
};
var utils = require('../utils.js');

var defaultConfig = {
  place: 'birth'
};

module.exports = function(config, data){

  config = utils.defaults(config, defaultConfig);
  
  var url = 'http://en.geneanet.org/search/',
      query = '?periode_type=entre';
  
  if(data.familyName){
    query = utils.addQueryParam(query, 'name', data.familyName);
  }
  
  if(config.place === 'birth'){
    if(data.birthPlace){
      query = utils.addQueryParam(query, 'place', data.birthPlace);
    }
  }
  
  else if(config.place === 'death'){
    if(data.deathPlace){
      query = utils.addQueryParam(query, 'place', data.deathPlace);
    }
  }
  
  if(data.birthDate){
    query = utils.addQueryParam(query, 'annee_debut', utils.getYear(data.birthDate));
  }
  
  if(data.deathDate){
    query = utils.addQueryParam(query, 'annee_fin', utils.getYear(data.deathDate));
  }
  
  return url + query;
  
};
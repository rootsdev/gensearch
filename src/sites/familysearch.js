var utils = require('../utils.js');
    
var defaultConfig = {
  birthRange: 2,
  deathRange: 2,
  marriageRange: 2
};

module.exports = function(config, data){

  config = utils.defaults(config, defaultConfig);

  var fsURL = 'https://www.familysearch.org/search/record/results?count=20';
  var query = '';
  
  // Simple mappings from the person data object to fs params
  // These don't need any special processing
  var simpleMappings = [
    ['givenname', 'givenName'],
    ['surname', 'familyName'],
    ['birth_place', 'birthPlace'],
    ['death_place', 'deathPlace'],
    ['father_givenname', 'fatherGivenName'],
    ['father_surname', 'fatherFamilyName'],
    ['mother_givenname', 'motherGivenName'],
    ['mother_surname', 'motherFamilyName'],
    ['spouse_givenname', 'spouseGivenName'],
    ['spouse_surname', 'spouseFamilyName'],
    ['marriage_place', 'marriagePlace']
  ];
  utils.each(simpleMappings, function(map) {
    if( data[map[1]] ) {
      query = utils.addQueryParam(query, map[0], data[map[1]]);
    }
  });
  
  // Process the birth year 
  if(data.birthDate){
    var birthYear = utils.getYearInt(data.birthDate);
    if( birthYear ) {
      query = utils.addQueryParam(query, 'birth_year_from', birthYear - config.birthRange);
      query = utils.addQueryParam(query, 'birth_year_to', birthYear + config.birthRange)
    }
  }
  
  // Process the death year
  if(data.deathDate){
    var deathYear = utils.getYearInt(data.deathDate);
    if( deathYear ) {
      query = utils.addQueryParam(query, 'death_year_from', deathYear - config.deathRange);
      query = utils.addQueryParam(query, 'death_year_to', deathYear + config.deathRange);
    }
  }

  // Process the marriage year
  if(data.marriageDate){
    var marriageYear = utils.getYearInt(data.marriageDate);
    if( marriageYear ) {
      query = utils.addQueryParam(query, 'marriage_year_from', marriageYear - config.marriageRange);
      query = utils.addQueryParam(query, 'marriage_year_to', marriageYear + config.marriageRange);
    }
  }
  
  if(config.collectionId){
    query = utils.addQueryParam(query, 'collection_id', config.collectionId);
  }
  
  return fsURL + query;

};

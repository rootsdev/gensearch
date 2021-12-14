var utils = require('../utils.js');
    
var defaultConfig = {
  birthRange: 2,
  deathRange: 2,
  marriageRange: 2
};

module.exports = function(config, data){

  config = utils.defaults(config, defaultConfig);

  var fsURL = 'https://www.familysearch.org/search/record/results?';
  var query = '';
  
  // Simple mappings from the person data object to fs params
  // These don't need any special processing
  var simpleMappings = [
    ['q.givenName', 'givenName'],
    ['q.surname', 'familyName'],
    ['q.birthLikePlace', 'birthPlace'],
    ['q.deathLikePlace', 'deathPlace'],
    ['q.fatherGivenName', 'fatherGivenName'],
    ['q.fatherSurname', 'fatherFamilyName'],
    ['q.motherGivenName', 'motherGivenName'],
    ['q.motherSurname', 'motherFamilyName'],
    ['q.spouseGivenName', 'spouseGivenName'],
    ['q.spouseSurname', 'spouseFamilyName'],
    ['q.marriageLikePlace', 'marriagePlace']
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
      query = utils.addQueryParam(query, 'q.birthLikeDate.from', birthYear - config.birthRange);
      query = utils.addQueryParam(query, 'q.birthLikeDate.to', birthYear + config.birthRange)
    }
  }
  
  // Process the death year
  if(data.deathDate){
    var deathYear = utils.getYearInt(data.deathDate);
    if( deathYear ) {
      query = utils.addQueryParam(query, 'q.deathLikeDate.from', deathYear - config.deathRange);
      query = utils.addQueryParam(query, 'q.deathLikeDate.to', deathYear + config.deathRange);
    }
  }

  // Process the marriage year
  if(data.marriageDate){
    var marriageYear = utils.getYearInt(data.marriageDate);
    if( marriageYear ) {
      query = utils.addQueryParam(query, 'q.marriageLikeDate.from', marriageYear - config.marriageRange);
      query = utils.addQueryParam(query, 'q.marriageLikeDate.to', marriageYear + config.marriageRange);
    }
  }
  
  if(config.collectionId){
    query = utils.addQueryParam(query, 'f.collectionId', config.collectionId);
  }
  
  return fsURL + query.replace('&', '');

};

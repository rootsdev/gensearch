var utils = require(require('path').join(__dirname, '..', 'utils.js')),
    _ = require('underscore')._;
    
var defaultConfig = {
  FS_YEAR_PLUS_MINUS: 2
};

module.exports = function(config, data){

  config = _.defaults(config, defaultConfig);

  var fsURL = 'https://familysearch.org/search/record/results#count=20&query=';
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
  _.each(simpleMappings, function(map) {
    if( data[map[1]] ) {
      query = addQueryParam(query, map[0], data[map[1]]);
    }
  });
  
  // Process the birth year 
  if(data.birthDate){
    var birthYear = utils.getYear(data.birthDate);
    if( birthYear ) {
      query = addQueryParam(query, 'birth_year', (birthYear - config.FS_YEAR_PLUS_MINUS)+'-'+(birthYear + config.FS_YEAR_PLUS_MINUS));
    }
  }
  
  // Process the death year
  if(data.deathDate){
    var deathYear = utils.getYear(data.deathDate);
    if( deathYear ) {
      query = addQueryParam(query, 'death_year', (deathYear - config.FS_YEAR_PLUS_MINUS)+'-'+(deathYear + config.FS_YEAR_PLUS_MINUS));
    }
  }

  // Process the marriage year
  if(data.marriageDate){
    var marriageYear = utils.getYear(data.marriageDate);
    if( marriageYear ) {
      query = addQueryParam(query, 'marriage_year', (marriageYear - config.FS_YEAR_PLUS_MINUS)+'-'+(marriageYear + config.FS_YEAR_PLUS_MINUS));
    }
  }
  
  return fsURL + encodeURIComponent(query);

};

/**
 * Add a query parameter to the current query
 */
function addQueryParam(query, queryParam, paramValue) {
  if(paramValue){
    if(query) {
      query += ' ';
    }
    query += '+' + queryParam + ':';
    // if the value has a space, wrap it in quotes      
    if(paramValue.indexOf(' ') >= 0) {
      query += '"' + paramValue + '"~';
    } else {
      query += paramValue + '~';
    }
  }
  return query;
};
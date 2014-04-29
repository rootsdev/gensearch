var utils = require('../utils.js');

var defaultConfig = {
  birthRange: 2,
  deathRange: 2
};

module.exports = function(config, data){

  config = utils.defaults(config, defaultConfig);

  var baseUrl = 'http://www.werelate.org/wiki/Special:Search?sort=score&ns=Person&rows=20&ecp=p';
  var query = '';
  
  // Simple mappings from the person data object to params
  // These don't need any further processing
  var mappings = [
    ['g', 'givenName'],
    ['s', 'familyName'],
    ['bp', 'birthPlace'],
    ['dp', 'deathPlace'],
    ['fg', 'fatherGivenName'],
    ['fs', 'fatherFamilyName'],
    ['mg', 'motherGivenName'],
    ['ms', 'motherFamilyName'],
    ['sg', 'spouseGivenName'],
    ['ss', 'spouseFamilyName']
  ];    
  utils.each(mappings, function(map) {
    if(data[map[1]]) {
      query = utils.addQueryParam(query, map[0], data[map[1]]);
    }
  });
  
  // Process dates and add the ranges
  if(data.birthDate) {
    query = utils.addQueryParam(query, 'bd', utils.getYear(data.birthDate));
    query = utils.addQueryParam(query, 'br', config.birthRange);
  }
  if(data.deathDate) {
    query = utils.addQueryParam(query, 'dd', utils.getYear(data.deathDate));
    query = utils.addQueryParam(query, 'dr', config.deathRange);
  }
  
  return baseUrl + query;

};

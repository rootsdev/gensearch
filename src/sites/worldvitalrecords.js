var utils = require('../utils.js');

var defaultConfig = {
  dateRange: 2
};

module.exports = function(config, data){

  config = utils.defaults(config, defaultConfig);

  var baseUrl = 'http://www.worldvitalrecords.com/GlobalSearch.aspx?qt=g';
  var query = '';
  
  // Name
  query = utils.addQueryParam(query, 'zfn', data.givenName);
  query = utils.addQueryParam(query, 'zln', data.familyName);
  
  // Place
  if(data.birthPlace){
    query = utils.addQueryParam(query, 'zplace', data.birthPlace);
  } else if(data.deathPlace){
    query = utils.addQueryParam(query, 'zplace', data.deathPlace);
  }
  
  // Date
  if(data.birthDate) {
    query = utils.addQueryParam(query, 'zdate', utils.getYear(data.birthDate));
    query = utils.addQueryParam(query, 'zdater', config.dateRange);
  } else if(data.deathDate) {
    query = utils.addQueryParam(query, 'zdate', utils.getYear(data.deathDate));
    query = utils.addQueryParam(query, 'zdater', config.dateRange);
  }
  
  // TODO record type?
  
  return baseUrl + query;

};

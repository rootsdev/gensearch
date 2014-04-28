var utils = require('../utils.js');

var defaultConfig = {
  BILLIONGRAVES_YEAR_RANGE: 2
};

module.exports = function(config, data){

  config = utils.defaults(config, defaultConfig);

  var url = 'http://billiongraves.com/pages/search/index.php#year_range=' + config.BILLIONGRAVES_YEAR_RANGE + '&lim=0&action=search&exact=false&country=0&state=0&county=0';
  var query = '';
  
  if(data.givenName) {
    query = utils.addQueryParam(query, 'given_names', data.givenName);
  }
  if(data.familyName) {
    query = utils.addQueryParam(query, 'family_names', data.familyName);
  }
  
  if(data.birthDate) {
    query = utils.addQueryParam(query, 'birth_year', utils.getYear(data.birthDate));
  }
  
  if(data.deathDate) {
    query = utils.addQueryParam(query, 'death_year', utils.getYear(data.deathDate));
  }
  
  return url + query;

};

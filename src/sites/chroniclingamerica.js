var utils = require('../utils.js');

module.exports = {
  id: 'chroniclingamerica',
  name: 'Chronicling America',
  url: 'http://chroniclingamerica.loc.gov',
  search: function(config, data){

    var url = 'http://chroniclingamerica.loc.gov/search/pages/results/';    
    
    // Necessary param to get the dates to work
    var query = '?dateFilterType=yearRange';
  
    var nameParts = [];
    if(data.givenName) {
      nameParts.push(data.givenName);
    }
    if(data.familyName) {
      nameParts.push(data.familyName);
    }
    query = utils.addQueryParam(query, 'proxtext', nameParts.join(' '));
    
    if(data.birthDate) {
      query = utils.addQueryParam(query, 'date1', utils.getYear(data.birthDate));
    }
    if(data.deathDate) {
      query = utils.addQueryParam(query, 'date2', utils.getYear(data.deathDate));
    }
  
    return url + query;
  
  }
};

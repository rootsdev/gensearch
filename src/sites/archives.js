var utils = require('../utils.js');

var defaultConfig = {
  birthRange: 2,
  deathRange: 2
};

module.exports = {
  id: 'archives',
  name: 'Archives',
  url: 'http://www.archives.com',
  search: function(config, data){

    config = utils.defaults(config, defaultConfig);
  
    var url = 'http://www.archives.com/GA.aspx';    
    var query = '?_act=registerAS_org&Location=US';
  
    if(data.givenName) {
      query = utils.addQueryParam(query, 'FirstName', data.givenName);
    }
    if(data.familyName) {
      query = utils.addQueryParam(query, 'LastName', data.familyName);
    }
    if(data.birthDate) {
      query = utils.addQueryParam(query, 'BirthYear', utils.getYear(data.birthDate));
      query = utils.addQueryParam(query, 'BirthYearSpan', config.birthRange);
    }
    if(data.deathDate) {
      query = utils.addQueryParam(query, 'DeathYear', utils.getYear(data.deathDate));
      query = utils.addQueryParam(query, 'DeathYearSpan', config.deathRange);
    }
  
    return url + query;
  
  }
};

var utils = require('../utils.js');

module.exports = function(config, data){

  // http://www.usgwarchives.net/search/search.cgi/search.htm?q=ted+yurkiewicz&cmd=Search%21&form=extended&wm=sub
  
  var url = 'http://www.usgwarchives.net/search/search.cgi/search.htm',
      query = '?cmd=Search%21&form=extended';
      
  var nameParts = [];
  if(data.givenName) {
    nameParts.push(data.givenName);
  }
  if(data.familyName) {
    nameParts.push(data.familyName);
  }
  query = utils.addQueryParam(query, 'q', nameParts.join(' '));
  
  return url + query;

};
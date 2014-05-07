var utils = require('../utils.js');

module.exports = function(config, data){

  var url = 'http://www.openarch.nl/search.php?lang=en&name='; // defaults to English version of website  
  var query = '';
  
  if(data.givenName) {
    query += data.givenName;
  }
  
  if(data.familyName) {
    if(query) {
      query += ' ';
    }
    query += data.familyName;
  }
  
  // Replace spaces with +
  query = query.replace(/ /g, '+');
  
  return url + query;

};
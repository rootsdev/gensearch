var utils = require('../utils.js');

module.exports = function(config, data){

  var url = 'http://go.fold3.com/query.php?query=';
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

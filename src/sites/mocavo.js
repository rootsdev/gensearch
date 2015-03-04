var utils = require('../utils.js');

module.exports = function(config, data){

  var url = 'http://www.mocavo.com/search?start=0';

  if(data.givenName) {
    url += '&plus_fname%5B%5D=' + encodeURIComponent(data.givenName);
  }
  if(data.familyName) {
    url += '&plus_lname%5B%5D=' + encodeURIComponent(data.familyName);
  }
  
  return url;
};
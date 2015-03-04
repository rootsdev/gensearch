var utils = require('../utils.js');

module.exports = function(config, data){

  var url = 'http://trove.nla.gov.au/newspaper/result?q=';

  var parts = [];
  if(data.givenName) {
    parts.push(data.givenName);
  }
  if(data.familyName) {
    parts.push(data.familyName)
  }
  
  return url + encodeURIComponent(parts.join(' '));
};
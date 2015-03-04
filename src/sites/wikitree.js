var utils = require('../utils.js');

module.exports = function(config, data){

  var url = 'https://www.google.com/search?q=';
  
  var searchWords = ['site:wikitree.com'];
  
  if(data.givenName) {
    searchWords.push(data.givenName);
  }
  if(data.familyName) {
    searchWords.push(data.familyName);
  }
  
  return url += encodeURIComponent(searchWords.join(' '));
};
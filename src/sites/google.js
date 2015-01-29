var utils = require('../utils.js');

module.exports = function(config, data){

  var url = 'https://www.google.com/search?q=';

  var searchWords = ['~genealogy'];
  if(data.givenName) {
    searchWords.push(data.givenName);
  }
  if(data.familyName) {
    searchWords.push(data.familyName);
  }
  
  if(data.birthPlace) {
    searchWords.push(data.birthPlace);
  }
  
  return url += encodeURIComponent(searchWords.join(' '));
};
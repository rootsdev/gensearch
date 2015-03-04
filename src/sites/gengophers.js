var utils = require('../utils.js');

module.exports = function(config, data){

  var url = 'https://www.gengophers.com/#/search?';
  
  var params = {
    page: 1
  };
  
  if(data.givenName) {
    params.given = data.givenName;
  }
  if(data.familyName) {
    params.surname = data.familyName
  }
  
  return url + utils.queryString(params);;
};
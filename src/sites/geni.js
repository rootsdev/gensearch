var utils = require('../utils.js');

module.exports = function(config, data){

  var url = 'http://www.geni.com/search?search_type=people&names=';
  var name = '';
  
  if( data.givenName ) {
    name += data.givenName;
  }
  
  if( data.familyName ) {
    if( name ) {
      name += ' ';
    }
    name += data.familyName;
  }
  
  // Replace spaces with +
  name = name.replace(/ /g, '+');
  
  return url + name;
  
};

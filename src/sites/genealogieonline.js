var utils = require('../utils.js');

var defaultConfig = {
  birthRange: 5,
  deathRange: 5
};

module.exports = function(config, data){

  config = utils.defaults(config, defaultConfig);

  var url = 'https://www.genealogieonline.nl/en/zoeken/?publication=0';	// defaults to English version of website    
  var query = '';

  if(data.givenName) {
    query = utils.addQueryParam(query, 'q', data.familyName);
  }

  if(data.familyName) {
    query = utils.addQueryParam(query, 'vn', data.givenName);
  }

  if(data.spouseFamilyName) {
    query = utils.addQueryParam(query, 'pa', data.spouseFamilyName);
  }

  var place='';
  if (data.birthPlace) {
  	place=data.birthPlace;
  } else {
  	if (data.deathPlace) {
  		place=data.deathPlace;
  	} else {
  		if (data.marriagePlace) {
  			place=data.marriagePlace;
  		}
  	}
  }
  if (place) {
    query = utils.addQueryParam(query, 'pn', place);
  }
  
  if(data.birthDate) {
    query = utils.addQueryParam(query, 'gv', utils.getYear(data.birthDate)*1-config.birthRange);
    query = utils.addQueryParam(query, 'gt', utils.getYear(data.birthDate)*1+config.birthRange);
  }

  if(data.deathDate) {
    query = utils.addQueryParam(query, 'ov', utils.getYear(data.deathDate)*1-config.deathRange);
    query = utils.addQueryParam(query, 'ot', utils.getYear(data.deathDate)*1+config.deathRange);
  }

  return url + query;

};

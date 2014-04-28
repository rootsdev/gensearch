!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.gensearch=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var config = {};

var sites = {
  'ancestry': _dereq_('./sites/ancestry.js'),
  'archives': _dereq_('./sites/archives.js'),
  'billiongraves': _dereq_('./sites/billiongraves.js'),
  'familysearch': _dereq_('./sites/familysearch.js'),
  'findagrave': _dereq_('./sites/findagrave.js')
};

var search = module.exports = function(site, person){
  return sites[site] ? sites[site](config, person) : undefined;
};

search.config = function(newConfig){
  config = newConfig;
};

},{"./sites/ancestry.js":2,"./sites/archives.js":3,"./sites/billiongraves.js":4,"./sites/familysearch.js":5,"./sites/findagrave.js":6}],2:[function(_dereq_,module,exports){
var utils = _dereq_('../utils.js');

module.exports = function(config, data){

  var ancestryURL = 'http://search.ancestry.com/cgi-bin/sse.dll?rank=1';
  var query = '';
  
  // Simple mappings from the person data object to ancestry params
  // These don't need any further processing
  var mappings = [
    ['gsfn', 'givenName'],
    ['gsln', 'familyName'],
    ['msbpn__ftp', 'birthPlace'],
    ['msdpn__ftp', 'deathPlace'],
    ['msfng0', 'fatherGivenName'],
    ['msfns0', 'fatherFamilyName'],
    ['msmng0', 'motherGivenName'],
    ['msmns0', 'motherFamilyName'],
    ['mssng0', 'spouseGivenName'],
    ['mssns0', 'spouseFamilyName'],
    ['msgpn__ftp', 'marriagePlace']
  ]; 
  
  utils.each(mappings, function(map) {
    if( data[map[1]] ) {
      query = utils.addQueryParam(query, map[0], data[map[1]]);
    }
  });
  
  // Process dates
  query = utils.addQueryParam(query, 'msbdy', utils.getYear(data.birthDate));
  query = utils.addQueryParam(query, 'msddy', utils.getYear(data.deathDate));
  query = utils.addQueryParam(query, 'msgdy', utils.getYear(data.marriageDate));
  
  return ancestryURL + query + '&gl=allgs';

};

},{"../utils.js":7}],3:[function(_dereq_,module,exports){
var utils = _dereq_('../utils.js');

var defaultConfig = {
  ARCHIVES_BIRTH_SPAN: 2,
  ARCHIVES_DEATH_SPAN: 2
};

module.exports = function(config, data){

  config = utils.defaults(config, defaultConfig);

  var url = 'http://www.archives.com/GA.aspx';    
  var query = '?_act=registerAS_org&Location=US';

  if(data.givenName) {
    query = utils.addQueryParam(query, 'FirstName', data.givenName);
  }
  if(data.familyName) {
    query = utils.addQueryParam(query, 'LastName', data.familyName);
  }
  if(data.birthDate) {
    query = utils.addQueryParam(query, 'BirthYear', utils.getYear(data.birthDate));
    query = utils.addQueryParam(query, 'BirthYearSpan', config.ARCHIVES_BIRTH_SPAN);
  }
  if(data.deathDate) {
    query = utils.addQueryParam(query, 'DeathYear', utils.getYear(data.deathDate));
    query = utils.addQueryParam(query, 'DeathYearSpan', config.ARCHIVES_DEATH_SPAN);
  }

  return url + query;

};

},{"../utils.js":7}],4:[function(_dereq_,module,exports){
var utils = _dereq_('../utils.js');

var defaultConfig = {
  BILLIONGRAVES_YEAR_RANGE: 2
};

module.exports = function(config, data){

  config = utils.defaults(config, defaultConfig);

  var url = 'http://billiongraves.com/pages/search/index.php#year_range=' + config.BILLIONGRAVES_YEAR_RANGE + '&lim=0&action=search&exact=false&country=0&state=0&county=0';
  var query = '';
  
  if(data.givenName) {
    query = utils.addQueryParam(query, 'given_names', data.givenName);
  }
  if(data.familyName) {
    query = utils.addQueryParam(query, 'family_names', data.familyName);
  }
  
  if(data.birthDate) {
    query = utils.addQueryParam(query, 'birth_year', utils.getYear(data.birthDate));
  }
  
  if(data.deathDate) {
    query = utils.addQueryParam(query, 'death_year', utils.getYear(data.deathDate));
  }
  
  return url + query;

};

},{"../utils.js":7}],5:[function(_dereq_,module,exports){
var utils = _dereq_('../utils.js');
    
var defaultConfig = {
  FS_YEAR_PLUS_MINUS: 2
};

module.exports = function(config, data){

  config = utils.defaults(config, defaultConfig);

  var fsURL = 'https://familysearch.org/search/record/results#count=20&query=';
  var query = '';
  
  // Simple mappings from the person data object to fs params
  // These don't need any special processing
  var simpleMappings = [
    ['givenname', 'givenName'],
    ['surname', 'familyName'],
    ['birth_place', 'birthPlace'],
    ['death_place', 'deathPlace'],
    ['father_givenname', 'fatherGivenName'],
    ['father_surname', 'fatherFamilyName'],
    ['mother_givenname', 'motherGivenName'],
    ['mother_surname', 'motherFamilyName'],
    ['spouse_givenname', 'spouseGivenName'],
    ['spouse_surname', 'spouseFamilyName'],
    ['marriage_place', 'marriagePlace']
  ];
  utils.each(simpleMappings, function(map) {
    if( data[map[1]] ) {
      query = addQueryParam(query, map[0], data[map[1]]);
    }
  });
  
  // Process the birth year 
  if(data.birthDate){
    var birthYear = utils.getYearInt(data.birthDate);
    if( birthYear ) {
      query = addQueryParam(query, 'birth_year', (birthYear - config.FS_YEAR_PLUS_MINUS)+'-'+(birthYear + config.FS_YEAR_PLUS_MINUS));
    }
  }
  
  // Process the death year
  if(data.deathDate){
    var deathYear = utils.getYearInt(data.deathDate);
    if( deathYear ) {
      query = addQueryParam(query, 'death_year', (deathYear - config.FS_YEAR_PLUS_MINUS)+'-'+(deathYear + config.FS_YEAR_PLUS_MINUS));
    }
  }

  // Process the marriage year
  if(data.marriageDate){
    var marriageYear = utils.getYearInt(data.marriageDate);
    if( marriageYear ) {
      query = addQueryParam(query, 'marriage_year', (marriageYear - config.FS_YEAR_PLUS_MINUS)+'-'+(marriageYear + config.FS_YEAR_PLUS_MINUS));
    }
  }
  
  return fsURL + encodeURIComponent(query);

};

/**
 * Add a query parameter to the current query
 */
function addQueryParam(query, queryParam, paramValue) {
  if(paramValue){
    if(query) {
      query += ' ';
    }
    query += '+' + queryParam + ':';
    // if the value has a space, wrap it in quotes      
    if(paramValue.indexOf(' ') >= 0) {
      query += '"' + paramValue + '"~';
    } else {
      query += paramValue + '~';
    }
  }
  return query;
};
},{"../utils.js":7}],6:[function(_dereq_,module,exports){
var utils = _dereq_('../utils.js');

module.exports = function(config, data){

  var url = 'http://www.findagrave.com/cgi-bin/fg.cgi?page=gsr&GScntry=0&GSst=0&GSgrid=&df=all&GSob=n';
  var query = '';
  
  if( data.givenName ) {
    query = utils.addQueryParam(query, 'GSfn', data.givenName);
  }
  if( data.familyName ) {
    query = utils.addQueryParam(query, 'GSln', data.familyName);
  }
  
  if( data.birthDate ) {
    query = utils.addQueryParam(query, 'GSbyrel', 'in');
    query = utils.addQueryParam(query, 'GSby', (new Date(data.birthDate)).getFullYear());
  }
  
  if( data.deathDate ) {
    query = utils.addQueryParam(query, 'GSdyrel', 'in');
    query = utils.addQueryParam(query, 'GSdy', (new Date(data.deathDate)).getFullYear());
  }
  
  return url + query;

};

},{"../utils.js":7}],7:[function(_dereq_,module,exports){
var utils = {};

/**
 * Extract the year from a date.
 * Capture the special case of just a year because
 * javascript will consider it as the first second
 * of that year in GMT then convert it to the current
 * timezone which could be the previous year.
 */
utils.getYear = function(date){
  return /^\d{4}$/.test(date) ? date : new Date(date).getFullYear();
};

/**
 * Extract the year from a date and return as an integer.
 */
utils.getYearInt = function(date){
  return parseInt(utils.getYear(date));
};

/**
 * Add a query param to a url
 */
utils.addQueryParam = function(query, name, value){
  if(value){
    query += '&' + name + '=' + encodeURIComponent(value);
  }
  return query;
};

/**
 * Functions lifted from underscore.js
 * http://underscorejs.org/
 */
 
utils.isObject = function(obj) {
  return obj === Object(obj);
}; 
 
utils.each = function(obj, iterator, context) {
  if (obj == null) return obj;
  if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) {
    obj.forEach(iterator, context);
  } else if (obj.length === +obj.length) {
    for (var i = 0, length = obj.length; i < length; i++) {
      if (iterator.call(context, obj[i], i, obj) === breaker) return;
    }
  } else {
    var keys = utils.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
    }
  }
  return obj;
};

utils.keys = function(obj) {
  if (!utils.isObject(obj)) return [];
  if (Object.keys) return Object.keys(obj);
  var keys = [];
  for (var key in obj) if (hasOwnProperty.call(obj, key)) keys.push(key);
  return keys;
};
 
utils.defaults = function(obj) {
  utils.each(Array.prototype.slice.call(arguments, 1), function(source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === void 0) obj[prop] = source[prop];
      }
    }
  });
  return obj;
};

module.exports = utils;

},{}]},{},[1])
(1)
});
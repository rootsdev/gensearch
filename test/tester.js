var assert = require('assert'),
    search = require(require('path').join(__dirname, '..', 'gensearch.js')),
    data = require('./test-data.js');

module.exports = function(site){
  var tester = function(data, url){
    assert.equal(search(site, data), url);
  };
  tester.data = data;
  return tester;
};

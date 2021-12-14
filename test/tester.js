var assert = require('assert'),
    search = require(require('path').join(__dirname, '..', 'src', 'search')),
    data = require('./test-data.js');

module.exports = function(site){
  var tester = function(data, url, opts){
    // Parse URLs so that we can compare query params without requiring them to be in the same order
    const searchUrl = new URL(search(site, data, opts));
    const expectedUrl = new URL(url);
    // Compare origin and path
    assert.equal(`${searchUrl.origin}${searchUrl.pathname}`, `${expectedUrl.origin}${expectedUrl.pathname}`);
    // Compare query params
    searchUrl.searchParams.sort();
    expectedUrl.searchParams.sort()
    assert.equal(searchUrl.searchParams.toString(), expectedUrl.searchParams.toString());
  };
  tester.data = data;
  return tester;
};

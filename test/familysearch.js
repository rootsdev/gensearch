var assert = require('assert'),
    search = require(require('path').join(__dirname, '..', 'src', 'search.js'));

describe('familysearch', function(){
  
  it('1', function(){
    var url = search.url('familysearch', {
      givenName: "Joe William",
      familyName: "Clark"
    });
    assert.equal(url, 'https://familysearch.org/search/record/results#count=20&query=%2Bgivenname%3A%22Joe%20William%22~%20%2Bsurname%3AClark~');
  });
    
});
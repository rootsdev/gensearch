var test = require('../tester.js')('usgenweb');

describe('usgenweb', function(){
  
  it('1', function(){
    test(test.data[0], 'http://www.usgwarchives.net/search/search.cgi/search.htm?cmd=Search%21&form=extended&q=Joe%20William%20Clark');
  });
   
});

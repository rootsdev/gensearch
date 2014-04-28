var test = require('./../tester.js')('geni');

describe('geni', function(){
  
  it('1', function(){
    test(test.data[0], 'http://www.geni.com/search?search_type=people&names=Joe+William+Clark');
  });
    
});

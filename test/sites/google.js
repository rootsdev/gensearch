var test = require('../tester.js')('google');

describe('google', function(){
  
  it('1', function(){
    test(test.data[0], 'https://www.google.com/search?q=~genealogy%20Joe%20William%20Clark');
  });
  
  it('2', function(){
    test(test.data[1], 'https://www.google.com/search?q=~genealogy%20Joe%20William%20Clark%20Texas');
  });
   
});

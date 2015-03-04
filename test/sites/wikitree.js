var test = require('../tester.js')('wikitree');

describe('wikitree', function(){
  
  it('1', function(){
    test(test.data[0], 'https://www.google.com/search?q=site%3Awikitree.com%20Joe%20William%20Clark');
  });
   
});

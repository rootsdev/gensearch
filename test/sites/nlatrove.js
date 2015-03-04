var test = require('../tester.js')('nlatrove');

describe('nlatrove', function(){
  
  it('1', function(){
    test(test.data[0], 'http://trove.nla.gov.au/newspaper/result?q=Joe%20William%20Clark');
  });
   
});

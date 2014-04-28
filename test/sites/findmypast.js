var test = require('./../tester.js')('findmypast');

describe('findmypast', function(){
  
  it('1', function(){
    test(test.data[0], 'http://search.findmypast.co.uk/search/world-records?firstname_variants=true&firstname=Joe%20William&lastname=Clark');
  });
  
  // TODO Test birth and death
    
});

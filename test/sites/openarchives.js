var test = require('../tester.js')('openarchives');

describe('openarchives', function(){

  it('1', function(){
    test(test.data[0], 'http://www.openarch.nl/search.php?lang=en&name=Joe+William+Clark');
  });
    
});
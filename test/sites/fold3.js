var test = require('./../tester.js')('fold3');

describe('fold3', function(){
  
  it('1', function(){
    test(test.data[0], 'http://go.fold3.com/query.php?query=Joe+William+Clark');
  });
    
});

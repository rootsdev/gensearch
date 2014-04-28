var test = require('./../tester.js')('newspapers');

describe('newspapers', function(){
  
  it('1', function(){
    test(test.data[0], 'http://go.newspapers.com/results.php?query=Joe William Clark');
  });
  
  it('2', function(){
    test(test.data[1], 'http://go.newspapers.com/results.php?query=Joe William Clark&year-start=1830&year-end=1894');
  });
  
  // TODO Test combinations of birth, death dates
  // TODO Test config
    
});

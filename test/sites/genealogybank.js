var test = require('../tester.js')('genealogybank');

describe('genealogybank', function(){
  
  it('1', function(){
    test(test.data[0], 'http://www.genealogybank.com/gbnk/?dateType=range&fname=Joe%20William&lname=Clark');
  });
  
  it('2', function(){
    test(test.data[1], 'http://www.genealogybank.com/gbnk/?dateType=range&fname=Joe%20William&lname=Clark&rgfromDate=1830&rgtoDate=1894');
  });
  
  // TODO Test combinations of birth, death dates
  // TODO Test config
    
});

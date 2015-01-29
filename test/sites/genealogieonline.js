var test = require('../tester.js')('genealogieonline');

describe('genealogieonline', function(){

  it('1', function(){
    test(test.data[0], 'http://www.genealogieonline.nl/en/zoeken/?publication=0&q=Clark&vn=Joe%20William');
  });
  
  it('2', function(){
    test(test.data[1], 'http://www.genealogieonline.nl/en/zoeken/?publication=0&q=Clark&vn=Joe%20William&pa=Thomas&pn=Texas&gv=1830&gt=1840&ov=1884&ot=1894');
  });
    
});
var test = require('../tester.js')('mocavo');

describe('mocavo', function(){
  
  it('1', function(){
    test(test.data[0], 'http://www.mocavo.com/search?start=0&plus_fname%5B%5D=Joe%20William&plus_lname%5B%5D=Clark');
  });
   
});

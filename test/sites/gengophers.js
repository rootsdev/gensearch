var test = require('../tester.js')('gengophers');

describe('gengophers', function(){
  
  it('1', function(){
    test(test.data[0], 'https://www.gengophers.com/#/search?page=1&given=Joe%20William&surname=Clark');
  });
   
});

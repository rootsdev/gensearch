var test = require('./../tester.js')('worldvitalrecords');

describe('worldvitalrecords', function(){
  
  it('1', function(){
    test(test.data[0], 'http://www.worldvitalrecords.com/GlobalSearch.aspx?qt=g&zfn=Joe%20William&zln=Clark');
  });
  
  it('2', function(){
    test(test.data[1], 'http://www.worldvitalrecords.com/GlobalSearch.aspx?qt=g&zfn=Joe%20William&zln=Clark&zplace=Texas&zdate=1835&zdater=2');
  });
    
});

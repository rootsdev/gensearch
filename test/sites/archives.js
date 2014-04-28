var test = require('./../tester.js')('archives');

describe('archives', function(){
  
  it('1', function(){
    test(test.data[0], 'http://www.archives.com/GA.aspx?_act=registerAS_org&Location=US&FirstName=Joe%20William&LastName=Clark');
  });
  
  it('2', function(){
    test(test.data[1], 'http://www.archives.com/GA.aspx?_act=registerAS_org&Location=US&FirstName=Joe%20William&LastName=Clark&BirthYear=1835&BirthYearSpan=2&DeathYear=1889&DeathYearSpan=2');
  });
    
});

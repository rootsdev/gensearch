var test = require('../tester.js')('werelate');

describe('werelate', function(){
  
  it('1', function(){
    test(test.data[0], 'http://www.werelate.org/wiki/Special:Search?sort=score&ns=Person&rows=20&ecp=p&g=Joe%20William&s=Clark');
  });
  
  it('2', function(){
    test(test.data[1], 'http://www.werelate.org/wiki/Special:Search?sort=score&ns=Person&rows=20&ecp=p&g=Joe%20William&s=Clark&bp=Texas&dp=Springfield%2C%20Illinois&fg=Dale&fs=Clark&mg=Susan&ms=Anthony&sg=Jennifer&ss=Thomas&bd=1835&br=2&dd=1889&dr=2');
  });
    
});

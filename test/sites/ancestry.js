var test = require('../tester.js')('ancestry');

describe('ancestry', function(){
  
  it('1', function(){
    test(test.data[0], 'http://search.ancestry.com/cgi-bin/sse.dll?rank=1&gsfn=Joe%20William&gsln=Clark&gl=allgs');
  });
  
  it('2', function(){
    test(test.data[1], 'http://search.ancestry.com/cgi-bin/sse.dll?rank=1&gsfn=Joe%20William&gsln=Clark&msbpn__ftp=Texas&msdpn__ftp=Springfield%2C%20Illinois&msfng0=Dale&msfns0=Clark&msmng0=Susan&msmns0=Anthony&mssng0=Jennifer&mssns0=Thomas&msgpn__ftp=St%20Louis%2C%20MO&msbdy=1835&msddy=1889&msgdy=1858&gl=allgs');
  });
  
  it('db', function(){
    test(test.data[0], 'http://search.ancestry.com/cgi-bin/sse.dll?rank=1&gsfn=Joe%20William&gsln=Clark&db=bivri_EnglandBirth', {db: 'bivri_EnglandBirth'});
  });
    
});

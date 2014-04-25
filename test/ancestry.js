var assert = require('assert'),
    search = require(require('path').join(__dirname, '..', 'gensearch.js'));

describe('ancestry', function(){
  
  it('1', function(){
    test({
      givenName: 'Joe William',
      familyName: 'Clark'
    }, 'http://search.ancestry.com/cgi-bin/sse.dll?rank=1&gsfn=Joe%20William&gsln=Clark&gl=allgs');
  });
  
  it('2', function(){
    test({
      givenName: 'Joe William',
      familyName: 'Clark',
      birthPlace: 'Texas',
      birthDate: '4 February 1835',
      deathPlace: 'Springfield, Illinois',
      deathDate: '1889',
      marriagePlace: 'St Louis, MO',
      marriageDate: '5 June 1858',
      fatherGivenName: 'Dale',
      fatherFamilyName: 'Clark',
      motherGivenName: 'Susan',
      motherFamilyName: 'Anthony',
      spouseGivenName: 'Jennifer',
      spouseFamilyName: 'Thomas'
    }, 'http://search.ancestry.com/cgi-bin/sse.dll?rank=1&gsfn=Joe%20William&gsln=Clark&msbpn__ftp=Texas&msdpn__ftp=Springfield%2C%20Illinois&msfng0=Dale&msfns0=Clark&msmng0=Susan&msmns0=Anthony&mssng0=Jennifer&mssns0=Thomas&msgpn__ftp=St%20Louis%2C%20MO&msbdy=1835&msddy=1889&msgdy=1858&gl=allgs');
  });
    
});

function test(data, url){
  assert.equal(search('ancestry', data), url);
};
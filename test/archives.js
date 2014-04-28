var assert = require('assert'),
    search = require(require('path').join(__dirname, '..', 'gensearch.js'));

describe('archives', function(){
  
  it('1', function(){
    test({
      givenName: 'Joe William',
      familyName: 'Clark'
    }, 'http://www.archives.com/GA.aspx?_act=registerAS_org&Location=US&FirstName=Joe%20William&LastName=Clark');
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
    }, 'http://www.archives.com/GA.aspx?_act=registerAS_org&Location=US&FirstName=Joe%20William&LastName=Clark&BirthYear=1835&BirthYearSpan=2&DeathYear=1889&DeathYearSpan=2');
  });
    
});

function test(data, url){
  assert.equal(search('archives', data), url);
};

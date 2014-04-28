var assert = require('assert'),
    search = require(require('path').join(__dirname, '..', 'gensearch.js'));

describe('billiongraves', function(){
  
  it('1', function(){
    test({
      givenName: 'Joe William',
      familyName: 'Clark'
    }, 'http://billiongraves.com/pages/search/index.php#year_range=2&lim=0&action=search&exact=false&country=0&state=0&county=0&given_names=Joe%20William&family_names=Clark');
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
    }, 'http://billiongraves.com/pages/search/index.php#year_range=2&lim=0&action=search&exact=false&country=0&state=0&county=0&given_names=Joe%20William&family_names=Clark&birth_year=1835&death_year=1889');
  });
    
});

function test(data, url){
  assert.equal(search('billiongraves', data), url);
};

var assert = require('assert'),
    search = require(require('path').join(__dirname, '..', 'src', 'search.js'));

describe('familysearch', function(){
  
  it('1', function(){
    test({
      givenName: 'Joe William',
      familyName: 'Clark'
    }, 'https://familysearch.org/search/record/results#count=20&query=%2Bgivenname%3A%22Joe%20William%22~%20%2Bsurname%3AClark~');
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
    }, 'https://familysearch.org/search/record/results#count=20&query=%2Bgivenname%3A%22Joe%20William%22~%20%2Bsurname%3AClark~%20%2Bbirth_place%3ATexas~%20%2Bdeath_place%3A%22Springfield%2C%20Illinois%22~%20%2Bfather_givenname%3ADale~%20%2Bfather_surname%3AClark~%20%2Bmother_givenname%3ASusan~%20%2Bmother_surname%3AAnthony~%20%2Bspouse_givenname%3AJennifer~%20%2Bspouse_surname%3AThomas~%20%2Bbirth_year%3A1833-1837~%20%2Bdeath_year%3A1887-1891~');
  });
    
});

function test(data, url){
  assert.equal(search('familysearch', data), url);
};
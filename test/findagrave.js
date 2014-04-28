var assert = require('assert'),
    search = require(require('path').join(__dirname, '..', 'gensearch.js'));

describe('findagrave', function(){
  
  it('1', function(){
    test({
      givenName: 'Joe William',
      familyName: 'Clark'
    }, 'http://www.findagrave.com/cgi-bin/fg.cgi?page=gsr&GScntry=0&GSst=0&GSgrid=&df=all&GSob=n&GSfn=Joe%20William&GSln=Clark');
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
    }, 'http://www.findagrave.com/cgi-bin/fg.cgi?page=gsr&GScntry=0&GSst=0&GSgrid=&df=all&GSob=n&GSfn=Joe%20William&GSln=Clark&GSbyrel=in&GSby=1835&GSdyrel=in&GSdy=1889');
  });
    
});

function test(data, url){
  assert.equal(search('findagrave', data), url);
};

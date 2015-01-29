var test = require('../tester.js')('findmypast.com');

describe('findmypast.com', function(){
  
  it('1', function(){
    test(test.data[0], 'http://search.findmypast.com/search/world-records?firstname_variants=true&firstname=Joe%20William&lastname=Clark');
  });
  
  it('birth', function(){
    test(test.data[1], 'http://search.findmypast.com/search/world-records?firstname_variants=true&firstname=Joe%20William&lastname=Clark&yearofbirth=1835&keywordsplace=Texas&yearofbirth_offset=5', {
      event: 'birth',
      birthRange: 5
    });
  });
  
  it('death', function(){
    test(test.data[1], 'http://search.findmypast.com/search/world-records?firstname_variants=true&firstname=Joe%20William&lastname=Clark&yearofdeath=1889&keywordsplace=Springfield%2C%20Illinois&yearofdeath_offset=10', {
      event: 'death',
      deathRange: 10
    });
  });
  
  it('other', function(){
    test(test.data[0], 'http://search.findmypast.com/search/world-records?firstname_variants=true&firstname=Joe%20William&lastname=Clark&eventyear=1850&keywordsplace=Middlesex&eventyear_offset=1', {
      event: 'other',
      otherRange: 1,
      otherDate: '1850',
      otherPlace: 'Middlesex'
    });
  });
    
});

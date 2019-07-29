var test = require('../tester.js')('familysearch');

describe('familysearch', function(){
  
  it('1', function(){
    test(test.data[0], 'https://www.familysearch.org/search/record/results?count=20&givenname=Joe%20William&surname=Clark');
  });
  
  it('2', function(){
    test(test.data[1], 'https://www.familysearch.org/search/record/results?count=20&givenname=Joe%20William&surname=Clark&birth_place=Texas&death_place=Springfield%2C%20Illinois&father_givenname=Dale&father_surname=Clark&mother_givenname=Susan&mother_surname=Anthony&spouse_givenname=Jennifer&spouse_surname=Thomas&marriage_place=St%20Louis%2C%20MO&birth_year_from=1833&birth_year_to=1837&death_year_from=1887&death_year_to=1891&marriage_year_from=1856&marriage_year_to=1860');
  });
  
  it('config', function(){
    test(test.data[1], 'https://www.familysearch.org/search/record/results?count=20&givenname=Joe%20William&surname=Clark&birth_place=Texas&death_place=Springfield%2C%20Illinois&father_givenname=Dale&father_surname=Clark&mother_givenname=Susan&mother_surname=Anthony&spouse_givenname=Jennifer&spouse_surname=Thomas&marriage_place=St%20Louis%2C%20MO&birth_year_from=1832&birth_year_to=1838&death_year_from=1885&death_year_to=1893&marriage_year_from=1853&marriage_year_to=1863', {
      birthRange: 3,
      deathRange: 4,
      marriageRange: 5
    });
  });
  
  it('collection', function(){
    test(test.data[0], 'https://www.familysearch.org/search/record/results?count=20&givenname=Joe%20William&surname=Clark&collection_id=1473014', {
      collectionId: 1473014
    });
  });
    
});

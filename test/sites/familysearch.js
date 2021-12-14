var test = require('../tester.js')('familysearch');

describe('familysearch', function(){
  
  it('1', function(){
    test(test.data[0], 'https://www.familysearch.org/search/record/results?q.givenName=Joe%20William&q.surname=Clark');
  });
  
  it('2', function(){
    test(test.data[1], 'https://www.familysearch.org/search/record/results?q.birthLikeDate.from=1833&q.birthLikeDate.to=1837&q.birthLikePlace=Texas&q.deathLikeDate.from=1887&q.deathLikeDate.to=1891&q.deathLikePlace=Springfield%2C%20Illinois&q.fatherGivenName=Dale&q.fatherSurname=Clark&q.givenName=Joe%20William&q.marriageLikeDate.from=1856&q.marriageLikeDate.to=1860&q.marriageLikePlace=St%20Louis%2C%20MO&q.motherGivenName=Susan&q.motherSurname=Anthony&q.spouseGivenName=Jennifer&q.spouseSurname=Thomas&q.surname=Clark');
  });
  
  it('config', function(){
    test(test.data[1], 'https://www.familysearch.org/search/record/results?q.birthLikeDate.from=1832&q.birthLikeDate.to=1838&q.birthLikePlace=Texas&q.deathLikeDate.from=1885&q.deathLikeDate.to=1893&q.deathLikePlace=Springfield%2C%20Illinois&q.fatherGivenName=Dale&q.fatherSurname=Clark&q.givenName=Joe%20William&q.marriageLikeDate.from=1853&q.marriageLikeDate.to=1863&q.marriageLikePlace=St%20Louis%2C%20MO&q.motherGivenName=Susan&q.motherSurname=Anthony&q.spouseGivenName=Jennifer&q.spouseSurname=Thomas&q.surname=Clark', {
      birthRange: 3,
      deathRange: 4,
      marriageRange: 5
    });
  });
  
  it('collection', function(){
    test(test.data[0], 'https://www.familysearch.org/search/record/results?q.givenName=Joe%20William&q.surname=Clark&f.collectionId=1473014', {
      collectionId: 1473014
    });
  });
    
});

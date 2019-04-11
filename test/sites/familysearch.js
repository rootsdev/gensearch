var test = require('../tester.js')('familysearch');

describe('familysearch', function(){
  
  it('1', function(){
    test(test.data[0], 'https://www.familysearch.org/search/record/results?count=20&query=%2Bgivenname%3A%22Joe%20William%22~%20%2Bsurname%3AClark~');
  });
  
  it('2', function(){
    test(test.data[1], 'https://www.familysearch.org/search/record/results?count=20&query=%2Bgivenname%3A%22Joe%20William%22~%20%2Bsurname%3AClark~%20%2Bbirth_place%3ATexas~%20%2Bdeath_place%3A%22Springfield%2C%20Illinois%22~%20%2Bfather_givenname%3ADale~%20%2Bfather_surname%3AClark~%20%2Bmother_givenname%3ASusan~%20%2Bmother_surname%3AAnthony~%20%2Bspouse_givenname%3AJennifer~%20%2Bspouse_surname%3AThomas~%20%2Bmarriage_place%3A%22St%20Louis%2C%20MO%22~%20%2Bbirth_year%3A1833-1837~%20%2Bdeath_year%3A1887-1891~%20%2Bmarriage_year%3A1856-1860~');
  });
  
  it('config', function(){
    test(test.data[1], 'https://www.familysearch.org/search/record/results?count=20&query=%2Bgivenname%3A%22Joe%20William%22~%20%2Bsurname%3AClark~%20%2Bbirth_place%3ATexas~%20%2Bdeath_place%3A%22Springfield%2C%20Illinois%22~%20%2Bfather_givenname%3ADale~%20%2Bfather_surname%3AClark~%20%2Bmother_givenname%3ASusan~%20%2Bmother_surname%3AAnthony~%20%2Bspouse_givenname%3AJennifer~%20%2Bspouse_surname%3AThomas~%20%2Bmarriage_place%3A%22St%20Louis%2C%20MO%22~%20%2Bbirth_year%3A1832-1838~%20%2Bdeath_year%3A1885-1893~%20%2Bmarriage_year%3A1853-1863~', {
      birthRange: 3,
      deathRange: 4,
      marriageRange: 5
    });
  });
  
  it('collection', function(){
    test(test.data[0], 'https://www.familysearch.org/search/record/results?count=20&query=%2Bgivenname%3A%22Joe%20William%22~%20%2Bsurname%3AClark~&collection_id=1473014', {
      collectionId: 1473014
    });
  });
    
});

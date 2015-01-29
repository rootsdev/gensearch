var test = require('../tester.js')('geneanet.en');

describe('en.geneanet', function(){
  
  it('1', function(){
    test(test.data[0], 'http://en.geneanet.org/search/?periode_type=entre&name=Clark');
  });
  
  it('2', function(){
    test(test.data[1], 'http://en.geneanet.org/search/?periode_type=entre&name=Clark&place=Texas&annee_debut=1835&annee_fin=1889');
  });
  
  it('death place', function(){
    test(test.data[1], 'http://en.geneanet.org/search/?periode_type=entre&name=Clark&place=Springfield%2C%20Illinois&annee_debut=1835&annee_fin=1889', {
      place: 'death'
    });
  });
    
});

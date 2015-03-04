var test = require('../tester.js')('americanancestors'),
    utils = require(require('path').join(__dirname, '..', '..', 'src', 'utils.js'));

describe('americanancestors', function(){
  
  it('1', function(){
    test(test.data[0], 'http://www.americanancestors.org/search/database-search?firstname=Joe%20William&lastname=Clark');
  });
  
  it('2', function(){
    test(test.data[1], 'http://www.americanancestors.org/search/database-search?firstname=Joe%20William&lastname=Clark&fromyear=1835&toyear=1889&location=Texas');
  });
  
  it('use death place when birth place is not available', function(){
    var data = utils.extend({}, test.data[1]);
    delete data.birthPlace;
    test(data, 'http://www.americanancestors.org/search/database-search?firstname=Joe%20William&lastname=Clark&fromyear=1835&toyear=1889&location=Springfield%2C%20Illinois');
  });
   
});

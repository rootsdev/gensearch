var test = require('./../tester.js')('billiongraves');

describe('billiongraves', function(){
  
  it('1', function(){
    test(test.data[0], 'http://billiongraves.com/pages/search/index.php#year_range=2&lim=0&action=search&exact=false&country=0&state=0&county=0&given_names=Joe%20William&family_names=Clark');
  });
  
  it('2', function(){
    test(test.data[1], 'http://billiongraves.com/pages/search/index.php#year_range=2&lim=0&action=search&exact=false&country=0&state=0&county=0&given_names=Joe%20William&family_names=Clark&birth_year=1835&death_year=1889');
  });
    
});

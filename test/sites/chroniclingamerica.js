var test = require('./../tester.js')('chroniclingamerica');

describe('chroniclingamerica', function(){
  
  it('1', function(){
    test(test.data[0], 'http://chroniclingamerica.loc.gov/search/pages/results/?dateFilterType=yearRange&proxtext=Joe%20William%20Clark');
  });
  
  it('2', function(){
    test(test.data[1], 'http://chroniclingamerica.loc.gov/search/pages/results/?dateFilterType=yearRange&proxtext=Joe%20William%20Clark&date1=1835&date2=1889');
  });
    
});

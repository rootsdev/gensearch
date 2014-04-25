var assert = require('assert'),
    utils = require(require('path').join(__dirname, '..', 'src', 'utils.js'));
    
describe('utils', function(){
  
  it('getYear', function(){
    assert.equal(utils.getYear('2 February 1835'), '1835');
  });
  
  it('getYearInt', function(){
    assert.equal(utils.getYearInt('2 February 1835'), 1835);
  });
  
});
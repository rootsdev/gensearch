var assert = require('assert'),
    search = require(require('path').join(__dirname, '..', 'src', 'search.js'));
    
describe('utils', function(){
  
  it('empty config', function(){
    assert.deepEqual(search.config(), {});
  });
  
  it('one site config', function(){
    search.config('ancestry', {a: 'a'});
    assert.deepEqual(search.config(), {ancestry: {a: 'a'}});
  });
  
  it('multi site configs', function(){
    search.config({ancestry: {a: 'b'}, fold3: {a: 'a'}});
    search.config({site: {c: 'c'}});
    assert.deepEqual(search.config(), {ancestry: {a: 'b'}, fold3: {a: 'a'}, site: {c: 'c'}});
  });
  
});
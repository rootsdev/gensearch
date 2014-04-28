var test = require('./../tester.js')('findagrave');

describe('findagrave', function(){
  
  it('1', function(){
    test(test.data[0], 'http://www.findagrave.com/cgi-bin/fg.cgi?page=gsr&GScntry=0&GSst=0&GSgrid=&df=all&GSob=n&GSfn=Joe%20William&GSln=Clark');
  });
  
  it('2', function(){
    test(test.data[1], 'http://www.findagrave.com/cgi-bin/fg.cgi?page=gsr&GScntry=0&GSst=0&GSgrid=&df=all&GSob=n&GSfn=Joe%20William&GSln=Clark&GSbyrel=in&GSby=1835&GSdyrel=in&GSdy=1889');
  });
    
});

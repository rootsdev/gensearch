var test = require('../tester.js')('myheritage');

describe('myheritage', function(){
  
  it('1', function(){
    test(test.data[0], 'http://www.myheritage.com/research?formId=master&formMode=1&action=query&catId=1&qname=Name+fn.Joe%2F3William+ln.Clark&qevents=List&qrelatives=List');
  });
  
  it('2', function(){
    test(test.data[1], 'http://www.myheritage.com/research?formId=master&formMode=1&action=query&catId=1&qname=Name+fn.Joe%2F3William+ln.Clark&qevents-event1=Event+et.birth+ey.1835+ep.Texas+epmo.similar&qevents-any%2F1event_1=Event+et.death+ey.1889+ep.Springfield,%2F3Illinois+epmo.similar&qevents-any%2F1event_2=Event+et.marriage+ey.1858+ep.St%2F3Louis,%2F3MO+epmo.similar&qevents=List&qrelative_relativeName=Name+fn.Dale+ln.Clark+lnmsrs.false&qrelatives-relative=Relative+rt.father+rn.*qrelative_relativeName&qaddRelative_1_addRelativeName=Name+fn.Susan+ln.Anthony+lnmsrs.false&qrelatives-addRelative_1=Relative+rt.mother+rn.*qaddRelative_1_addRelativeName&qaddRelative_2_addRelativeName=Name+fn.Jennifer+ln.Thomas+lnmsrs.false&qrelatives-addRelative_2=Relative+rt.spouse+rn.*qaddRelative_2_addRelativeName&qrelatives=List');
  });
    
});

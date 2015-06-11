var utils = require('../utils.js');

module.exports = {
  id: 'findagrave',
  name: 'Find A Grave',
  url: 'http://www.findagrave.com',
  search: function(config, data){

    var url = 'http://www.findagrave.com/cgi-bin/fg.cgi?page=gsr&GScntry=0&GSst=0&GSgrid=&df=all&GSob=n';
    var query = '';
    
    if( data.givenName ) {
      query = utils.addQueryParam(query, 'GSfn', data.givenName);
    }
    if( data.familyName ) {
      query = utils.addQueryParam(query, 'GSln', data.familyName);
    }
    
    if( data.birthDate ) {
      query = utils.addQueryParam(query, 'GSbyrel', 'in');
      query = utils.addQueryParam(query, 'GSby', (new Date(data.birthDate)).getFullYear());
    }
    
    if( data.deathDate ) {
      query = utils.addQueryParam(query, 'GSdyrel', 'in');
      query = utils.addQueryParam(query, 'GSdy', (new Date(data.deathDate)).getFullYear());
    }
    
    return url + query;
  
  }
};

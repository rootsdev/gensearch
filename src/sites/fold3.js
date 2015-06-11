module.exports = {
  id: 'fold3',
  name: 'fold3',
  url: 'http://www.fold3.com',
  search: function(config, data){

    var url = 'http://go.fold3.com/query.php?query=';
    var query = '';
    
    if(data.givenName) {
      query += data.givenName;
    }
    
    if(data.familyName) {
      if(query) {
        query += ' ';
      }
      query += data.familyName;
    }
    
    // Replace spaces with +
    query = query.replace(/ /g, '+');
    
    return url + query;
    
  }
};

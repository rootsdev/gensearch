var utils = require('../utils.js');

module.exports = function(config, data){
  
  var url = 'http://www.myheritage.com/research';    
  var query = '?formId=master&formMode=1&action=query&catId=1';

  var name = '';
  if(data.givenName) {
    name += '+fn.' + fixSpace(data.givenName);
  }
  if(data.familyName) {
    name += '+ln.' + fixSpace(data.familyName);
  }
  if(name){
    query += '&qname=Name' + name;
  }
  
  var birth = '';
  if(data.birthDate){
    birth += '+ey.' + utils.getYear(data.birthDate);
  }
  if(data.birthPlace){
    birth += '+ep.' + fixSpace(data.birthPlace);
  }
  if(birth){
    query += '&qevents-event1=Event+et.birth' + birth + '+epmo.similar';
  }
  
  var death = '';
  if(data.deathDate){
    death += '+ey.' + utils.getYear(data.deathDate);
  }
  if(data.deathPlace){
    death += '+ep.' + fixSpace(data.deathPlace);
  }
  if(death){
    query += '&qevents-any%2F1event_1=Event+et.death' + death + '+epmo.similar';
  }
  
  var marriage = '';
  if(data.marriageDate){
    marriage += '+ey.' + utils.getYear(data.marriageDate);
  }
  if(data.marriagePlace){
    marriage += '+ep.' + fixSpace(data.marriagePlace);
  }
  if(marriage){
    query += '&qevents-any%2F1event_2=Event+et.marriage' + marriage + '+epmo.similar';
  }
  
  // Yes, this really does have to be here
  query += '&qevents=List';
  
  var father = '';
  if(data.fatherGivenName) {
    father += '+fn.' + fixSpace(data.fatherGivenName);
  }
  if(data.fatherFamilyName) {
    father += '+ln.' + fixSpace(data.fatherFamilyName);
  }
  if(father){
    query += '&qrelative_relativeName=Name' + father + '+lnmsrs.false&qrelatives-relative=Relative+rt.father+rn.*qrelative_relativeName';
  }
  
  var mother = '';
  if(data.motherGivenName) {
    mother += '+fn.' + fixSpace(data.motherGivenName);
  }
  if(data.motherFamilyName) {
    mother += '+ln.' + fixSpace(data.motherFamilyName);
  }
  if(mother){
    query += '&qaddRelative_1_addRelativeName=Name' + mother + '+lnmsrs.false&qrelatives-addRelative_1=Relative+rt.mother+rn.*qaddRelative_1_addRelativeName';
  }
   
  var spouse = '';
  if(data.spouseGivenName) {
    spouse += '+fn.' + fixSpace(data.spouseGivenName);
  }
  if(data.spouseFamilyName) {
    spouse += '+ln.' + fixSpace(data.spouseFamilyName);
  }
  if(spouse){
    query += '&qaddRelative_2_addRelativeName=Name' + spouse + '+lnmsrs.false&qrelatives-addRelative_2=Relative+rt.spouse+rn.*qaddRelative_2_addRelativeName';
  }
   
  query += '&qrelatives=List';

  return url + query;

};

// I can't believe we have to do this
function fixSpace(str){
  return str.replace(/ /g, '%2F3');
}

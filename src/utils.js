module.exports = {
  
  /**
   * Extract the year from a date.
   * Capture the special case of just a year because
   * javascript will consider it as the first second
   * of that year in GMT then convert it to the current
   * timezone which could be the previous year.
   */
  getYear: function(date){
    return date.test(/\d{4}/) ? date : new Date(date).getFullYear();
  }
  
};

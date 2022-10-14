const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  console.log();
  console.log(date);
  if(!date) {
    return 'Unable to determine the time of year!';
  }
  if(Object.prototype.toString.call(date) !== "[object Date]" || isNaN(date)) {
    throw new Error('Invalid date!');
  }
  const month = date.getMonth() + 1;
  if(month === 1 || month === 2 || month === 12) {
    return 'winter';
  }
  if(month >= 3 && month <= 5) {
    return 'spring';
  }
  if(month >= 6 && month <= 8) {
    return 'summer';
  }
  if(month >= 9 && month <= 11) {
    return 'autumn';
  }
  return month;
}

module.exports = {
  getSeason
};

/*
console.log(getSeason())
console.log(getSeason('foo'))
console.log(getSeason({ John: 'Smith' }))
console.log(getSeason(20192701))
console.log(getSeason([2019, '27', 0 + '1']))
console.log(getSeason(() => new Date()))
console.log(getSeason(new Date(2020, 02, 31)))
*/
console.log(getSeason('foo'))
console.log(getSeason({ John: 'Smith' }))
console.log(getSeason(20192701))
console.log(getSeason([2019, '27', 0 + '1']))
console.log(getSeason(() => new Date()))
console.log(getSeason(new Date(2020, 02, 31)))
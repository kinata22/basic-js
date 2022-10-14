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
  //проверить, не был ли параметр undefined, null, 0, NaN, "" или просто false
  if(!date) {
    return 'Unable to determine the time of year!';
  }

  /*
  Object.prototype.toString.call(date) возвращает собственное строковое представление данного типа объекта - в нашем случае "[object Date]". Поскольку date.toString переопределяет свой родительский метод, нам нужно .call или .apply метод из Object.prototype, который непосредственно...
  Обходит пользовательский тип объекта с тем же именем конструктора (например: "Дата" )
  Работает в разных контекстах JS (например, iframes) в отличие от instanceof.
  */
  if(Object.prototype.toString.call(date) != "[object Date]") {
    throw new Error('Invalid date!');
  }


  // для проверки tricky moment и very tricky moment
  try {
    const month = date.getTime();
  }
  catch(err) {
    throw new Error('Invalid date!');
  }


  //if (date && date.getMonth && date.getMonth.call) {
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
  //}
}

module.exports = {
  getSeason
};

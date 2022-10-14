const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(data) {
  let sum = 0;
  data.forEach(element => {
    element.forEach(value => {
      //console.log(value);
      if(value === '^^') {
        sum++;
      }
    })
  });
  //console.log(sum);
  return sum;
}

module.exports = {
  countCats
};

/*
countCats([
    [0, 1, '^^'],
    [0, '^^', 2],
    ['^^', 1, 2]
   ]);
   */
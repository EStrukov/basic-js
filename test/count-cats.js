const {
  NotImplementedError
} = require('../extensions/index.js');

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
function countCats(matrix) {
  let counter = [];
  for (let i = 0; i < matrix.length; i++) {
    Array.prototype.push.apply(counter, matrix[i].filter(el => el === '^^'))
  }
  return counter.length;
}

module.exports = {
  countCats
};

//выполнено
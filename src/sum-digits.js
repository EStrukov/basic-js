const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {

  let array = String(n).split(""); //
  n = 0;
  for (i = 0; i < array.length; i++) {
    n += Number(array[i]); //преобразовал элемент массива в число, теперь него тип — number
  }
  if (n > 9) {
    let array = String(n).split(""); //
    console.log(array)
    n = 0;
    for (i = 0; i < array.length; i++) {
      n += Number(array[i]);
    }
  }

  return n;
}

module.exports = {
  getSumOfDigits
};
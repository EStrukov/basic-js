const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr ) {
   const nz = arr.filter(Boolean).sort((a, b) => {
   if (a > b) {
  return 1;
  } else if (b > a) {
    return -1;
  } else if (a < 0) {
    return 1;
  } else {
    return 0;
  }});
  
   let pos = 0;
   return arr.map((x, i) => x && nz[pos++]);
}

  // function sortNumbers(a, b) {
  //   if (a > b) {
  //     return 1;
  //   } else if (b > a) {
  //     return -1;
  //   } else if (a < 0){
  //     return 0;
  //   } else {
  //     return 0;
  //   }
  

module.exports = {
  sortByHeight
};

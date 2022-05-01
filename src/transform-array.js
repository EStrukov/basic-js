const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
 const newArray = arr.slice();
 for (let i = 0; i < arr.length; i++){
   if (arr[i] === '--discard-next') {
     if (newArray[i + 1] == "undefined") {
       newArray.splice(i, 1);
       continue
     } else {
     newArray.splice(i, 1);
      newArray.splice(i + 1, 1);
      continue
      }

   } else if (arr[i] === '--discard-prev') {
          if (newArray[i - 1] == "undefined") {
                 newArray.splice(i, 1);
                continue
          } else {
     newArray.splice(i, 1);
     newArray.splice(i - 1, 1);
     continue
     }

   } else if (arr[i] === '--double-next') {
     if (newArray[i + 1] == "undefined") {
       newArray.splice(i, 1);
       continue
     } else {
     newArray[i] = newArray[i + 1];
     continue
     }

   } else if (arr[i] === '--double-prev') {
     if (newArray[i - 1] == "undefined") {
       newArray.splice(i, 1);
       continue
     } else {
     newArray[i] = newArray[i - 1];
     continue
     }

 } else if (!Array.isArray(arr)) {
   throw new error("'arr' parameter must be an instance of the Array!")
 } else if (arr.length == 0) {
   return newArray
 } else {
   return newArray
 }
}
}
module.exports = {
  transform
};


// --discard-next исключает следующий за ней элемент исходного массива из преобразованного массива.
//   --discard-prev исключает предшествующий ей элемент исходного массива из преобразованного массива.
//   --double-next дублирует следующий за ней элемент исходного массива в преобразованном массиве.
//   --double-prev дублирует предшествующий ей элемент исходного массива в преобразованном массиве.
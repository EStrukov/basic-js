const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(/* value */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(/* position */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};


// getLength возвращает текущую длину цепи в виде числа;
// addLink(value) добавляет звено, содержащее строковое представление value к цепочке;
// removeLink(position) удаляет звено цепи, находящееся в заданном положении;
// reverseChain разворачивает цепь задом наперед;
// finishChain завершает цепь и возвращает ее.
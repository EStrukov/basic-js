const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  
    getLength() {
        return this.chain.length;
      },
      addLink(value) {
        if (arguments.length == 0) {
          this.chain.push(' ');
        } else if (value === null) {
          this.chain.push('null');
        } else {
          this.chain.push(value);
        }
        return this;
      },
      removeLink(position) {
        if (position != "number" || position > this.chain.length || position < this.chain.length) {
          throw new Error("You can't remove incorrect link!")
        } else {
        this.chain.splice(position - 1, 1);
        return this;
        }
      },
      reverseChain() {
        this.chain.reverse();
        return this;
      },
      finishChain() {
        return '( ' + this.chain.join(' )~~( ') + ' )';
      },
      chain: [],
};

module.exports = {
  chainMaker
};


// getLength возвращает текущую длину цепи в виде числа;
// addLink(value) добавляет звено, содержащее строковое представление value к цепочке;
// removeLink(position) удаляет звено цепи, находящееся в заданном положении;
// reverseChain разворачивает цепь задом наперед;
// finishChain завершает цепь и возвращает ее.
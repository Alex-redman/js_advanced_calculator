'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
    add: (num) => result + num,

    subtract: (num) => result - num,

    multiply: (num) => result * num,

    divide: (num) => (num !== 0 ? result / num : NaN),

    operate(callback, num) {
      result = callback(num);

      return this;
    },
    reset() {
      result = 0;

      return this;
    },

    get result() {
      return result;
    },
  };
}

module.exports = makeCalculator;

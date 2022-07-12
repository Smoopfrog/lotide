const assertArraysEqual = require('./assertArraysEqual');

const flatten = array => {
  let flatArr = [];

  for (const element of array) {
    if (Array.isArray(element)) {
      for (const innerElement of element) {
        flatArr.push(innerElement);
      }
    } else {
      flatArr.push(element);
    }
  }
  return flatArr;
};

module.exports = flatten;

// Test
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);


const eqArrays = require('./eqArrays');

// Prints a test for matching arrays
const assertArraysEqual = (arrayOne, arrayTwo) => {

  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`🔥🔥🔥 Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

module.exports = assertArraysEqual;
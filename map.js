// Checks for matching arrays
const eqArrays = function(arrayOne, arrayTwo) {
  let match = true;
  // Check to see if the arrays are the same length
  if (arrayOne.length !== arrayTwo.length) {
    match = false;
  }
  // Check to if the elements are the same
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      match = false;
    }
  }
  return match;
};


const assertArraysEqual = function(arrayOne, arrayTwo) {

  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`🔥🔥🔥 Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
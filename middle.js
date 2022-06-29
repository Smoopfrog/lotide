// Test functions
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

// Middle Function
const middle = function(array) {
  // Create a middle array
  let midArray = [];

  // Check if the array is long enough to have a middle
  if (array.length <= 2) {
    return midArray;
  }

  // Check if the array is an odd length
  if (array.length % 2 === 1) {
    midArray.push(array[Math.floor(array.length / 2)])
    return midArray;
  }

  //Check if the array is an even length
  if (array.length % 2 === 0) {
    midArray.push(array[Math.floor((array.length / 2) - 1)])
    midArray.push(array[Math.floor(array.length / 2)])
    return midArray;
  }

};

// Tests
assertArraysEqual(middle([1]), []) // => []
assertArraysEqual(middle([1, 2]), []) // => [])
assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
const takeUntil = (array, callback) => {
  let newArray = [];
  for (const element of array) {
    if (callback(element)) {
      return newArray;
    }
    newArray.push(element);
  }
  return newArray;
};

// Test
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

// Prints a test for matching arrays
const assertArraysEqual = function(arrayOne, arrayTwo) {

  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`🔥🔥🔥 Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"])
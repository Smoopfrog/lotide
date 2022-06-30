// Testing functions

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

// Letter position function
const letterPositions = function(sentence) {
  const results = {};

  // Loop through the sentence
  for (let i = 0; i < sentence.length; i++) {
    //Checking if an array exists
    if (Array.isArray(results[sentence[i]])) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [];
      results[sentence[i]].push(i); 
    }

  }
  return results;
};

// Tests

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
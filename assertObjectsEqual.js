//Test Functions

//Compares two arrays
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

// eqObjects function
const eqObjects = function(object1, object2) {
  let objectKeys1 = Object.keys(object1);
  let objectKeys2 = Object.keys(object2);

  // Checking the lenght of each object
  if (objectKeys1.length !== objectKeys2.length) {
    return false;
  }
  for (const key of objectKeys1) {
    // Checking for arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // Using eqArrays to compare arrays
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      //Comparing the contents of each object
      if (object1[key] === objectKeys2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🔥🔥🔥 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual(eqObjects([1, 2, 3], [1, 2, 3]), true);
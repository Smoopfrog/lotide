// Test fuctions
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🔥🔥🔥 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// Tests

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
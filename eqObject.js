const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// eqObjects function
const eqObject = (object1, object2) => {
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

module.exports = eqObject;

// Tests
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObject(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObject(ab, abc), false); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObject(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObject(cd, cd2), false); // => false
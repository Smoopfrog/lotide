// Assert Equal Function
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🔥🔥🔥 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//findKey function
const findKey = function(obj, val) {
  for (const key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
}

// Test
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKey(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKey(bestTVShowsByGenre, "That '70s Show"), undefined);
// Assert Equal Function
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🔥🔥🔥 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (obj, callback) => {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

let result1 = (findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));

assertEqual(result1, "noma");
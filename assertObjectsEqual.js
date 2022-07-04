const eqObject = require('./eqObject');

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObject(actual, expected)) {
    console.log(`🔥🔥🔥 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

// Test
// assertObjectsEqual(eqObject([1, 2, 3], [1, 2, 3]), true);
const assertArraysEqual = require('./assertArraysEqual');


// Letter position function
const letterPositions = sentence => {
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

module.exports = letterPositions;
// Tests
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").l, [2, 3]);
// assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
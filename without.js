const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  // Copy the source array to a new array
  let newArray = [...source];

  // Loop through the source array and itemsToRemove array
  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      // Check if source and itemsToRemove are the same
      if (newArray[i] === itemsToRemove[j]) {
        // remove element
        newArray.splice(i, 1);
      }
    }
  }
  return newArray;
};

module.exports = without;
// Test
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// assertArraysEqual(words, ["hello", "world"]);

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2]), ["1", "2"]);
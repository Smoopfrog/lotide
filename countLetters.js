const assertEqual = require('./assertEqual');

const countLetters = function(str) {
  const letterCount = {};

  //Loop through the string
  for (const letter of str) {
    //Increment the letters on the object

    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};

module.exports = countLetters;


// Tests
// const result1 = countLetters("lighthouse in the house");
// assertEqual(result1["a"], undefined);
// assertEqual(result1["l"], 1);
// assertEqual(result1["h"], 4);

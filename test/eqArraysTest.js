const eqArrays = require('../eqArrays')
const assertEqual = require('../assertEqual');

// Test
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), false); // => should FAIL
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); // => should FAIL
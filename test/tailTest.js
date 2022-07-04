const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {
  
  it("returns [\"Lighthouse\", \"Labs\"] for [\"Yo Yo\", \"Lighthouse\", \"Labs\"]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
  
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});

// //Test
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// console.log(tail([]));
// console.log(tail([1]));
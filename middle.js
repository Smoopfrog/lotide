// Middle Function
const middle = array => {
  // Create a middle array
  let midArray = [];

  // Check if the array is long enough to have a middle
  if (array.length <= 2) {
    return midArray;
  }

  // Check if the array is an odd length
  if (array.length % 2 === 1) {
    midArray.push(array[Math.floor(array.length / 2)]);
    return midArray;
  }

  //Check if the array is an even length
  if (array.length % 2 === 0) {
    midArray.push(array[Math.floor((array.length / 2) - 1)]);
    midArray.push(array[Math.floor(array.length / 2)]);
    return midArray;
  }

};

module.exports = middle;
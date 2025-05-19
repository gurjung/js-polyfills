require("../../polyfills/array/every.polyfill");

const arr = [2, 4, 6, 8];
console.assert(
  arr.myEvery((x) => x % 2 === 0),
  "Test Case 1 Failed: All even numbers"
);

console.assert(
  !arr.myEvery((x) => x < 5),
  "Test Case 2 Failed: Not all numbers are < 5"
);

const sparseArr = [2, , 6];
console.assert(
  sparseArr.myEvery((x) => x % 2 === 0),
  "Test Case 3 Failed: Should skip holes"
);

// thisArg test
const context = { threshold: 3 };
const result = [4, 5, 6].myEvery(function (x) {
  return x > this.threshold;
}, context);
console.assert(result, "Test Case 4 Failed: thisArg context");

console.log("✅ All test cases passed for myEvery!");

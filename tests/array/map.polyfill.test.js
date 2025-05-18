require("../../polyfills/array/map.polyfill");

const arr = [1, 2, 3];
console.assert(
  JSON.stringify(arr.myMap((x) => x * 2)) === JSON.stringify([2, 4, 6]),
  "Test Case 1 Failed"
);

const sparseArr = [1, , 3];
const result = sparseArr.myMap((x) => x * 2);

console.assert(
  result.length === 3 && !(1 in result),
  "Sparse array test failed"
);

console.log("✅ All test cases passed!");

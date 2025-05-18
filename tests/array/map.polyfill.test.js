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

// Test case: thisArg binding in myMap

const context = { multiplier: 10 };

const result1 = arr.myMap(function (item) {
  return item * this.multiplier;
}, context);

console.assert(
  JSON.stringify(result1) === JSON.stringify([10, 20, 30]),
  "thisArg binding test failed"
);


console.log("✅ All test cases passed!");

require("../../polyfills/array/filter.polyfill");

// Basic filter test
const arr1 = [1, 2, 3];
console.assert(
  JSON.stringify(arr1.myFilter(x => x > 1)) === JSON.stringify([2, 3]),
  "Filter test failed"
);

// Sparse array test
const sparseArr = [1, , 3];
const filteredSparse = sparseArr.myFilter(x => x > 1);
console.assert(
  JSON.stringify(filteredSparse) === JSON.stringify([3]),
  "Sparse filter test failed"
);

// thisArg binding test
const context = { threshold: 2 };
const arr2 = [1, 2, 3, 4];
const result = arr2.myFilter(function (item) {
  return item > this.threshold;
}, context);
console.assert(
  JSON.stringify(result) === JSON.stringify([3, 4]),
  "Filter thisArg test failed"
);

console.log("✅ All myFilter tests passed!");

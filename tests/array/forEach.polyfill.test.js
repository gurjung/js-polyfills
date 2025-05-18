require("../../polyfills/array/forEach.polyfill.js");

// Test Case 1: Basic callback execution
const arr1 = [1, 2, 3];
let result1 = [];
arr1.myForEach((val, idx) => {
  result1.push(val * idx);
});
console.assert(
  JSON.stringify(result1) === JSON.stringify([0, 2, 6]),
  "Test Case 1 Failed"
);

// Test Case 2: Mutate original array
const arr2 = [1, 2, 3];
arr2.myForEach((val, i, array) => {
  array[i] = val + 1;
});
console.assert(
  JSON.stringify(arr2) === JSON.stringify([2, 3, 4]),
  "Test Case 2 Failed"
);

// Test Case 3: Handle sparse arrays
const sparseArr = [1, , 3];
let counter = 0;
sparseArr.myForEach(() => counter++);
console.assert(counter === 2, "Test Case 3 Failed"); // Skips the hole

// Test Case 4: thisArg binding
const arr4 = [10, 20];
let context = { multiplier: 2 };
let result4 = [];
arr4.myForEach(function (val) {
  result4.push(val * this.multiplier);
}, context);
console.assert(
  JSON.stringify(result4) === JSON.stringify([20, 40]),
  "Test Case 4 Failed"
);

// Test Case 5: Non-function callback throws
let errorCaught = false;
try {
  [1, 2].myForEach(123);
} catch (e) {
  errorCaught = true;
}
console.assert(
  errorCaught,
  "Test Case 5 Failed: Expected TypeError for non-function"
);

console.log("✅ All forEach polyfill test cases passed!");

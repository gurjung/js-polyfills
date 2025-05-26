require("../../polyfills/array/reduce.polyfill");

const arr = [1, 2, 3, 4];

// Test Case 1: Sum without initial value
const sum = arr.myReduce((acc, curr) => acc + curr);
console.assert(sum === 10, "Test Case 1 Failed");

// Test Case 2: Sum with initial value
const sumWithInit = arr.myReduce((acc, curr) => acc + curr, 5);
console.assert(sumWithInit === 15, "Test Case 2 Failed");

// Test Case 3: Product with initial value
const product = arr.myReduce((acc, curr) => acc * curr, 1);
console.assert(product === 24, "Test Case 3 Failed");

// Test Case 4: Reduce on empty array with initial value
const emptyWithInit = [].myReduce((acc, curr) => acc + curr, 100);
console.assert(emptyWithInit === 100, "Test Case 4 Failed");

// Test Case 5: Reduce on empty array without initial value should throw
let errorCaught = false;
try {
  [].myReduce((acc, curr) => acc + curr);
} catch (e) {
  errorCaught = true;
  console.assert(
    e.message === "You need to pass initial val if array is empty",
    "Test Case 5 Error Message Mismatch"
  );
}
console.assert(errorCaught, "Test Case 5 Failed");

// Test Case 6: Initial value is falsy (0)
const sumWithZeroInit = arr.myReduce((acc, curr) => acc + curr, 0);
console.assert(sumWithZeroInit === 10, "Test Case 6 Failed");

// Test Case 7: Callback is not a function
let invalidCallbackError = false;
try {
  arr.myReduce(null);
} catch (e) {
  invalidCallbackError = true;
  console.assert(
    e.message === "callback is not a function",
    "Test Case 7 Error Message Mismatch"
  );
}
console.assert(invalidCallbackError, "Test Case 7 Failed");

// Test Case 8: Ensure it skips holes
const sparseArr = [1, , 3]; // Hole at index 1
let visitedIndices = [];
sparseArr.myReduce((acc, curr, idx) => {
  visitedIndices.push(idx);
  return acc + curr;
}, 0);
console.assert(
  JSON.stringify(visitedIndices) === JSON.stringify([0, 2]),
  "Test Case 8 Failed - Holes not skipped correctly"
);

console.log("✅ All test cases passed!");

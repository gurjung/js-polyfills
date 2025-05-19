require("../../polyfills/array/some.polyfill"); // adjust the path if needed

// Test 1: Basic functionality
const arr = [1, 2, 3];
console.assert(arr.mySome((x) => x > 2) === true, "Test Case 1 Failed");

// Test 2: No element satisfies the condition
console.assert(arr.mySome((x) => x > 5) === false, "Test Case 2 Failed");

// Test 3: thisArg binding
const context = { min: 2 };
console.assert(
  arr.mySome(function (x) {
    return x >= this.min;
  }, context) === true,
  "Test Case 3 (thisArg binding) Failed"
);

// Test 4: Sparse array behavior
const sparseArr = [1, , 3]; // index 1 is missing
let count = 0;
sparseArr.mySome(() => {
  count++;
  return false;
});
console.assert(
  count === 2, // only index 0 and 2 should be visited
  "Test Case 4 (sparse array) Failed"
);

// Test 5: Callback is not a function
let errorCaught = false;
try {
  arr.mySome(null);
} catch (e) {
  errorCaught = true;
}
console.assert(errorCaught, "Test Case 5 (invalid callback) Failed");

console.log("✅ All test cases passed!");

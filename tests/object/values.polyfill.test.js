require("../../polyfills/object/values.polyfill");

// Test 1: Basic values
const obj4 = { a: 1, b: 2 };
console.assert(
  JSON.stringify(Object.myValues(obj4)) === JSON.stringify([1, 2]),
  "myValues Test 1 Failed"
);

// Test 2: Skips inherited values
const proto2 = { inherited: 10 };
const obj5 = Object.create(proto2);
obj5.own = 20;
console.assert(
  JSON.stringify(Object.myValues(obj5)) === JSON.stringify([20]),
  "myValues Test 2 Failed"
);

// Test 3: Skips non-enumerable values
const obj6 = {};
Object.defineProperty(obj6, "hidden", {
  value: 999,
  enumerable: false,
});
obj6.shown = 111;
console.assert(
  JSON.stringify(Object.myValues(obj6)) === JSON.stringify([111]),
  "myValues Test 3 Failed"
);

// Test 4: Throws TypeError on null/undefined
let error2 = false;
try {
  Object.myValues(undefined);
} catch (e) {
  error2 = e instanceof TypeError;
}
console.assert(error2, "myValues Test 4 Failed");

console.log("✅ All test cases passed!");

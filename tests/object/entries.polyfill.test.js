require("../../polyfills/object/entries.polyfill");

// Test 1: Basic entries
const obj7 = { a: 1, b: 2 };
console.assert(
  JSON.stringify(Object.myEntries(obj7)) === JSON.stringify([["a", 1], ["b", 2]]),
  "myEntries Test 1 Failed"
);

// Test 2: Skips inherited and non-enumerable
const proto3 = { inherited: 5 };
const obj8 = Object.create(proto3);
Object.defineProperty(obj8, "hidden", {
  value: 42,
  enumerable: false,
});
obj8.visible = 9;
console.assert(
  JSON.stringify(Object.myEntries(obj8)) === JSON.stringify([["visible", 9]]),
  "myEntries Test 2 Failed"
);

// Test 3: Throws TypeError on null/undefined
let error3 = false;
try {
  Object.myEntries(null);
} catch (e) {
  error3 = e instanceof TypeError;
}
console.assert(error3, "myEntries Test 3 Failed");

console.log("✅ All test cases passed!");
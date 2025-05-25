require("../../polyfills/object/keys.polyfill");

// Test 1: Basic keys
const obj1 = { a: 1, b: 2 };
console.assert(
  JSON.stringify(Object.myKeys(obj1)) === JSON.stringify(["a", "b"]),
  "myKeys Test 1 Failed"
);

// Test 2: Skips inherited properties
const proto = { inherited: 10 };
const obj2 = Object.create(proto);
obj2.own = 20;
console.assert(
  JSON.stringify(Object.myKeys(obj2)) === JSON.stringify(["own"]),
  "myKeys Test 2 Failed"
);

// Test 3: Skips non-enumerable properties
const obj3 = {};
Object.defineProperty(obj3, "hidden", {
  value: 123,
  enumerable: false,
});
obj3.visible = 456;
console.assert(
  JSON.stringify(Object.myKeys(obj3)) === JSON.stringify(["visible"]),
  "myKeys Test 3 Failed"
);

// Test 4: Throws TypeError on null/undefined
let error1 = false;
try {
  Object.myKeys(null);
} catch (e) {
  error1 = e instanceof TypeError;
}
console.assert(error1, "myKeys Test 4 Failed");

console.log("✅ All test cases passed!");
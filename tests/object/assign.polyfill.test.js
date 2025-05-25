require("../../polyfills/object/assign.polyfill");

// Test 1: Basic property copying
const target1 = { a: 1 };
const source1 = { b: 2 };
Object.assign(target1, source1);
console.assert(target1.a === 1 && target1.b === 2, "Test 1 Failed");

// Test 2: Multiple sources
const target2 = { a: 1 };
const source2a = { b: 2 };
const source2b = { c: 3 };
Object.assign(target2, source2a, source2b);
console.assert(
  target2.a === 1 && target2.b === 2 && target2.c === 3,
  "Test 2 Failed"
);

// Test 3: Overwriting properties
const target3 = { a: 1, b: 2 };
const source3 = { b: 3, c: 4 };
Object.assign(target3, source3);
console.assert(
  target3.a === 1 && target3.b === 3 && target3.c === 4,
  "Test 3 Failed"
);

// Test 4: Null or undefined sources are skipped
const target4 = { a: 1 };
Object.assign(target4, null, undefined, { b: 2 });
console.assert(
  target4.a === 1 && target4.b === 2,
  "Test 4 Failed"
);

// Test 5: Symbols are copied (only enumerable ones)
const symKey = Symbol("sym");
const target5 = {};
const source5 = {};
Object.defineProperty(source5, symKey, {
  value: 42,
  enumerable: true,
});
Object.assign(target5, source5);
console.assert(target5[symKey] === 42, "Test 5 Failed");

// Test 6: Throws TypeError if target is null or undefined
let errorCaught = false;
try {
  Object.assign(null, { a: 1 });
} catch (e) {
  errorCaught = e instanceof TypeError;
}
console.assert(errorCaught, "Test 6 Failed");

console.log("✅ All Object.assign test cases passed!");

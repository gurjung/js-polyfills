# JavaScript Polyfills 🔧

A collection of polyfills for core JavaScript methods, written for deep learning and interview preparation.

---

## ✅ Implemented Polyfills

- [x] Array.prototype.map (`myMap`)
- [x] Array.prototype.filter (`myFilter`)
- [x] Array.prototype.forEach (`myForEach`)
- [x] Array.prototype.forEach (`mySome`)
- [x] Array.prototype.forEach (`myEvery`)
- [x] Object.assign
- [x] Object.keys
- [x] Object.values
- [x] Object.entries

---

## 📘 Array.prototype.myMap

### Description

Custom implementation of `Array.prototype.map()` which:

- Creates a new array with the results of calling a provided function on every element
- Supports optional `thisArg` to bind `this` inside the callback
- Skips holes (sparse array behavior)
- Throws if callback is not a function

### Example Usage

```js
const arr = [1, 2, 3];

const result = arr.myMap((num) => num * 2);
console.log(result); // [2, 4, 6]

const arr = [1, , 3];
console.log(arr.myMap((x) => x * 2)); // [2, <empty>, 6]

[1, 2].myMap(123); // ❌ Throws: Callback is not a function
```

## 📘 Array.prototype.myFilter

### Description

Custom implementation of `Array.prototype.filter()` which:

- Creates a new dense array with elements that pass the test implemented by the provided function
- Supports optional thisArg to bind this inside the callback
- Skips holes (does not call callback on missing indices)
- Throws if callback is not a function

### Example Usage

```js
const arr = [1, 2, 3, 4, 5];

// Filter numbers greater than 3
const filtered = arr.myFilter(function (item) {
  return item > 3;
});
console.log(filtered); // [4, 5]

const sparseArr = [1, , 3];
const result = sparseArr.myFilter((x) => x > 1);
console.log(result); // [3]

// Using thisArg
const context = { threshold: 2 };
const filteredWithContext = arr.myFilter(function (item) {
  return item > this.threshold;
}, context);
console.log(filteredWithContext); // [3, 4, 5]
```

---

## 📘 Array.prototype.myForEach

### Description

Custom implementation of `Array.prototype.forEach()` which:

- Executes a provided function once for each array element
- Supports optional thisArg to bind this inside the callback
- Skips holes (does not call callback on missing indices)
- Returns undefined
- Does not mutate the original array unless done manually inside the callback
- Throws if callback is not a function

### Example Usage

```js
const arr = [1, 2, 3];
arr.myForEach((val, i, array) => {
  array[i] = val * 2;
});
console.log(arr); // [2, 4, 6]

const sparseArr = [1, , 3];
let count = 0;
sparseArr.myForEach(() => count++);
console.log(count); // 2

const context = { multiplier: 10 };
const nums = [1, 2];
let result = [];
nums.myForEach(function (x) {
  result.push(x * this.multiplier);
}, context);
console.log(result); // [10, 20]
```

---

## 📘 Array.prototype.mySome

### Description

Custom implementation of `Array.prototype.some()` which:

- Tests whether at least one element passes the test implemented by the provided function
- Supports optional thisArg to bind this inside the callback
- Skips holes (does not call callback on missing indices)
- Returns a boolean
- Throws if callback is not a function

### Example Usage

```js
const arr = [1, 2, 3];
const hasEven = arr.mySome((x) => x % 2 === 0);
console.log(hasEven); // true

const sparseArr = [1, , 3];
const hasUndefined = sparseArr.mySome((x) => x === undefined);
console.log(hasUndefined); // false

[1, 2].mySome(123); // ❌ Throws: Callback is not a function
```

---

## 📘 Array.prototype.myEvery

### Description

Custom implementation of `Array.prototype.every()` which:

- Returns true if the callback returns a truthy value for every element
- Stops execution and returns false as soon as one element fails
- Supports optional thisArg to bind this inside the callback
- Skips holes (does not call callback on missing indices)
- Throws if callback is not a function

### Example Usage

```js
const arr = [2, 4, 6, 8];

const result = arr.myEvery((num) => num % 2 === 0);
console.log(result); // true

const result2 = arr.myEvery((num) => num < 5);
console.log(result2); // false

const context = { min: 3 };
const passed = [4, 5].myEvery(function (val) {
  return val > this.min;
}, context);
console.log(passed); // true
```

---

---

## 📘 Array.prototype.myReduce

### Description

Custom implementation of `Array.prototype.reduce()` which:

- Executes a reducer function on each element of the array
- Accumulates a single return value based on the callback logic
- Accepts an optional initialValue to use as the first accumulator value
- If initialValue is not provided, the first array element is used
- Throws if: The array is empty and no initialValue is provided or The callback is not a function
- Operates sequentially from left to right
- Does not process missing elements (holes in sparse arrays)

### Example Usage

```js
const arr = [1, 2, 3, 4];

// Sum without initial value
const sum = arr.myReduce((acc, curr) => acc + curr);
console.log(sum); // 10

// Sum with initial value
const sumWithInit = arr.myReduce((acc, curr) => acc + curr, 5);
console.log(sumWithInit); // 15

// Product with initial value
const product = arr.myReduce((acc, curr) => acc * curr, 1);
console.log(product); // 24

// Reduce on empty array with initial value
const emptyResult = [].myReduce((acc, curr) => acc + curr, 100);
console.log(emptyResult); // 100

// Reduce on empty array without initial value (throws)
try {
  [].myReduce((acc, curr) => acc + curr);
} catch (e) {
  console.log(e.message); // Reduce of empty array with no initial value
}
```

---

---

## 📘 Object.assign

### Description

Custom implementation of `Object.assign()` which:

- Copies own enumerable string and symbol properties from one or more source objects to a target object
- Supports multiple source objects and merges them in order (properties in later sources overwrite earlier ones)
- Skips null and undefined sources without throwing errors
- Throws a TypeError if the target object is null or undefined
- Does not copy inherited properties or non-enumerable properties

### Example Usage

```js
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3, a: 4 };

const result = Object.assign(target, source1, source2);
console.log(result); // { a: 4, b: 2, c: 3 }

// Symbol properties
const sym = Symbol("foo");
const sourceWithSymbol = { [sym]: 42 };
const target2 = {};
Object.assign(target2, sourceWithSymbol);
console.log(target2[sym]); // 42

// Null or undefined sources are skipped
const target3 = { x: 1 };
Object.assign(target3, null, undefined, { y: 2 });
console.log(target3); // { x: 1, y: 2 }

// Throws if target is null or undefined
try {
  Object.assign(null, { a: 1 });
} catch (e) {
  console.log(e instanceof TypeError); // true
}
```

---

---

## 📘 Object.myKeys, Object.myValues, Object.myEntries

### Description

Custom implementations of `Object.keys()`, `Object.values()`, and `Object.entries()` which:

- Work only on own enumerable string-keyed properties
- Skip inherited and non-enumerable properties
- Ignore symbol keys (same as native behavior)
- Throw a TypeError if the input is null or undefined
- Support primitive coercion (like Object(123) becomes a wrapper object)

### Example Usage

```js
const obj = Object.create({ inherited: "skip this" });
Object.defineProperty(obj, "hidden", {
  value: "not visible",
  enumerable: false,
});
obj.a = 1;
obj.b = 2;

console.log(Object.myKeys(obj)); // ['a', 'b']
console.log(Object.myValues(obj)); // [1, 2]
console.log(Object.myEntries(obj)); // [['a', 1], ['b', 2]]

// Symbol keys are ignored
const sym = Symbol("s");
obj[sym] = 42;
console.log(Object.myKeys(obj)); // still ['a', 'b']

// Works with primitives
console.log(Object.myKeys("hi")); // ['0', '1']
console.log(Object.myValues("hi")); // ['h', 'i']

// Throws if input is null or undefined
try {
  Object.myEntries(null);
} catch (e) {
  console.log(e instanceof TypeError); // true
}
```

---

## 🧪 How to Run Tests

```bash

node tests/array/map.polyfill.test.js
node tests/array/filter.polyfill.test.js
node tests/array/forEach.polyfill.test.js
node tests/array/some.polyfill.test.js
node tests/array/every.polyfill.test.js
node tests/array/reduce.polyfill.test.js
node tests/object/assign.polyfill.test.js
node tests/object/keys.polyfill.test.js
node tests/object/values.polyfill.test.js
node tests/object/entries.polyfill.test.js

```

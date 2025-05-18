# JavaScript Polyfills 🔧

A collection of polyfills for core JavaScript methods, written for deep learning and interview preparation.

---

## ✅ Implemented Polyfills

- [x] Array.prototype.map (`myMap`)

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
console.log(arr.myMap(x => x * 2)); // [2, <empty>, 6]


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
const filtered = arr.myFilter(function(item) {
  return item > 3;
});
console.log(filtered); // [4, 5]

const sparseArr = [1, , 3];
const result = sparseArr.myFilter(x => x > 1);
console.log(result); // [3]


// Using thisArg
const context = { threshold: 2 };
const filteredWithContext = arr.myFilter(function(item) {
  return item > this.threshold;
}, context);
console.log(filteredWithContext); // [3, 4, 5]
```

---

## 🧪 How to Run Tests

```bash
node tests/array/map.polyfill.test.js
node tests/array/filter.polyfill.test.js



````

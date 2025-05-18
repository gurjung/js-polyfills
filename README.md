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

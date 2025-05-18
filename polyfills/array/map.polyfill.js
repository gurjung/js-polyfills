/**
 * Polyfill for Array.prototype.map
 * Supports:
 * - thisArg binding
 * - Sparse arrays (skips holes)
 * - Type checking for callback
 */

Array.prototype.myMap = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  const tempArr = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      tempArr[i] = callback.call(thisArg, this[i], i, this);
    }
  }

  return tempArr;
};

// Array.myReduce

// callback -> prev, current, index, array

Array.prototype.myReduce = function (callback, initialVal) {
  if (this == null) {
    throw new TypeError("Reduce called on null or undefined");
  }

  if (typeof callback !== "function") {
    throw new TypeError("callback is not a function");
  }

  let accumulator;
  let index = 0;

  if (this.length === 0) {
    if (arguments.length > 1) {
      return initialVal;
    } else {
      throw new TypeError("You need to pass initial val if array is empty");
    }
  }

  if (arguments.length > 1) {
    accumulator = initialVal;
  } else {
    // skip to the first valid index
    while (
      index < this.length &&
      !Object.prototype.hasOwnProperty.call(this, index)
    ) {
      index++;
    }
    if (index >= this.length) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = this[index++];
  }

  while (index < this.length) {
    if (Object.prototype.hasOwnProperty.call(this, index)) {
      accumulator = callback(accumulator, this[index], index, this);
    }
    index++;
  }

  return accumulator;
};

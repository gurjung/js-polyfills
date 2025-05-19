Array.prototype.mySome = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }

  for (let i = 0; i < this.length; i++) {
    if (Object.prototype.hasOwnProperty.call(this, i)) {
      if (callback.call(thisArg, this[i], i, this)) {
        return true;
      }
    }
  }
  return false;
};

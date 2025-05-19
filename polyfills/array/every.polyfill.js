Array.prototype.myEvery = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw Error("Callback is not a function");
  }

  for (let i = 0; i < this.length; i++) {
    if (Object.prototype.hasOwnProperty.call(this, i)) {
      if (!callback.call(thisArg, this[i], i, this)) {
        return false;
      }
    }
  }
  return true;
};

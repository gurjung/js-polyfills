Array.prototype.myFilter = function(callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new Error("Callback is not a function");
  }

  const tempArr = [];

  for (let i = 0; i < this.length; i++) {
    if (Object.prototype.hasOwnProperty.call(this, i)) {
      if (callback.call(thisArg, this[i], i, this)) {
        tempArr.push(this[i]);
      }
    }
  }

  return tempArr;
};

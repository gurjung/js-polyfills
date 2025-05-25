Object.myValues = function (obj) {
  if (obj == null) {
    throw new TypeError(
      "Object.myValues cannot be called on null or undefined"
    );
  }

  obj = Object(obj); // convert primitive to object
  const tempArr = [];

  for (let i in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, i)) {
      tempArr.push(obj[i]);
    }
  }

  return tempArr;
};

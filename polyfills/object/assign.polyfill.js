function objectAssign(target, ...sources) {
  // 1 -> check if target is null or not
  if (target == null) {
    throw new TypeError("Target cannot be null or undefined");
  }

  // 2 -> make sure target is an object
  to = Object(target);

  // 3 -> iterate through each source
  sources.forEach((source) => {
    if (source == null) return;

    mergeProperties(Object.keys(source), source);

    // filter symbols 
    const symbols = Object.getOwnPropertySymbols(source).filter(
      (sym) => Object.getOwnPropertyDescriptors(source, sym).enumerable
    );

    mergeProperties(symbols, source);
  });

  function mergeProperties(keys, currSource) {
    keys.forEach((key) => {
      // Assign the value from the current source to the target object using the key
      to[key] = currSource[key];
    });
  }

  return to;
}

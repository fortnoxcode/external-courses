function reduceAnalog(array, callback, initialValue) {
  let previousValue = initialValue || array[0];
  for (let i = initialValue ? 0 : 1; i < array.length; i++) {
    previousValue = callback(previousValue, array[i], i, array);
  }
  return previousValue;
}
module.exports = reduceAnalog;

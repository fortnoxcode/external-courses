function sliceAnalog(array, begin = 0, end = array.length) {
  let newArr = [];
  for (let i = begin < 0 ? array.length + begin : begin;
    i < (end < 0 ? array.length + end : end); i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
module.exports = sliceAnalog;

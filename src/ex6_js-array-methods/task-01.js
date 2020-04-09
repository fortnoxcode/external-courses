function sliceAnalog(array, begin = 0, end = array.length) {
  let newArr = [];
  let start = begin < 0 ? array.length + begin : begin;
  let to = end < 0 ? array.length + end : end;

  for (start; start < to; start++) {
    newArr.push(array[start]);
  }
  return newArr;
}
module.exports = sliceAnalog;

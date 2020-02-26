function even_odd_zeros (array) {
  let evenNumb = 0;
  let oddNumb = 0;
  let zeroElmnt = 0;
    for (let i = 0; i < array.length; i++) {
    if (
      array[i] === 0) {
        zeroElmnt++
      }
    if (
      array[i] % 2 !== 0
      && typeof array[i] === 'number'
      && array[i] !== 0) {
        oddNumb++;
    }
    if (
      array[i] % 2 === 0
      && typeof array[i] === 'number'
      && array[i] !== 0) {
        evenNumb++
      }
}
let emptyArr = [evenNumb, oddNumb, zeroElmnt];
   return emptyArr;
}
  module.exports = even_odd_zeros

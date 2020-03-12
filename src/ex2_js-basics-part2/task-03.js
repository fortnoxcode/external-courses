function getEvenOddZero(array) {
  let counter = [0, 0, 0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      counter[2]++
    }
    if (array[i] % 2 !== 0 && typeof array[i] === 'number' && array[i] !== 0) {
      counter[1]++
    }
    if (array[i] % 2 === 0 && typeof array[i] === 'number' && array[i] !== 0) {
      counter[0]++
    }
  }
  console.log(`четных: ${counter[0]}; нечетных: ${
    counter[1]}; нуль: ${counter[2]}`);
  return counter;
}
module.exports = getEvenOddZero;

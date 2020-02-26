function isPrimeOrComposite(number) {
  let answer = 0;
  if (
    number > 1000
    || number < 0
    || typeof number !== 'number'
    || isNaN(number)) {
    return ('Данные неверны');
  }
    else {
      let z = number / 2;
      let x = 2;
      while (x <= z) {
      if (number % x === 0) {
      return "Число " + number + " - составное число";
    } else {
      x++
    }
  }
  return "Число " + number + " - простое число";
}
}
    module.exports = isPrimeOrComposite

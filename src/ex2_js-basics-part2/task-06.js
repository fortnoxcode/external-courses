function isPrimeOrComposite(number) {
  if (number > 1000 || number < 0 || typeof number !== 'number' || isNaN(number)) {
    return ('Данные неверны');
  } else {
    let x = 2;
    while (x <= number / 2) {
      if (number % x === 0) {
        return 'Число ' + number + ' - составное число';
      } else {
        x++
      }
    }
    return 'Число ' + number + ' - простое число';
  }
}
module.exports = isPrimeOrComposite;

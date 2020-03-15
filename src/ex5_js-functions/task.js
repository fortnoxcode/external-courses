const calculator = {
  value: 0,
  add(num) {
    if(num) { calculator.value += num; } return calculator.add;
  },
  subtract(num) {
    if(num) { calculator.value -= num; } return calculator.subtract;
  },
  multiply(num) {
    if(num) { calculator.value *= num; } return calculator.multiply;
  },
  divide(num) {
    if(num) { calculator.value /= num; } return calculator.divide;
  },
  getResult() { return calculator.value; },
  reset() { this.value = 0; return this.value;}
}
module.exports = calculator;

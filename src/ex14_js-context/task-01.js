class Calculator {
  constructor() {
    this.value = 0;
  }

  add(num) {
    this.value += num || 0;
    return this;
  }

  subtract(num) {
    this.value -= num || 0;
    return this;
  }

  multiply(num) {
    this.value *= num || 1;
    return this;
  }

  divide(num) {
    this.value /= num || 1;
    return this;
  }

  getResult() {
    return this.value;
  }

  reset() {
    this.value = 0;
    return this;
  }

  setState(num) {
    this.value = num || 0;
    return this;
  }

  fetchData(callback) {
    let run = async (num) => callback(num);
    run(500).then((num) => {
      this.value = num;
    })
  }

}
module.exports = new Calculator();

const Calculator = {
  value: 0,
  add(num) {
    if (typeof num === 'number' && !isNaN(num)) {
      this.value += num;
    }
    return this;
  },
  subtract(num) {
    if (typeof num === 'number' && !isNaN(num)) {
      this.value -= num;
    }
    return this;
  },
  multiply(num) {
    if (typeof num === 'number' && !isNaN(num)) {
      this.value *= num;
    }
    return this;
  },
  divide(num) {
    if (typeof num === 'number' && !isNaN(num)) {
      this.value /= num;
    }
    return this;
  },
  getResult() {
    return this.value
  },
  reset() {
    this.value = 0;
    return this;
  },
  setState(num) {
    this.add(num);
    return this;
  },
  async fetchData(callback) {
    this.value = await callback(500);;
  }
}

module.exports = Calculator;

function countSymbols(string) {
  let obj = string
    .split('')
    .reduce((data, symbol) => {
      data[symbol] = (data[symbol] || 0) + 1;
      return data;
    }, {});
  for (let key in obj) {
    console.log(`${key} : ${obj[key]}`);
  }
}
module.exports = countSymbols;

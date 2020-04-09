function countSymbols(string) {
  let obj = string
    .split('')
    .reduce((accum, symbol) => {
      accum[symbol] = (accum[symbol] || 0) + 1;
        return accum;
    }, {});
  for (let key in obj) {
    console.log(`${key} : ${obj[key]}`);
  }
}
module.exports = countSymbols;

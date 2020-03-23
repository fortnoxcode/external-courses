function getFirstSymbUp(string) {
  if (typeof string === 'string') {
    return string[0].toUpperCase() + string.slice(1)
  }
}
module.exports = getFirstSymbUp;

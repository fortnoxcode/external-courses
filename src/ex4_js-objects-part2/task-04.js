function getFirstSymbUp(string) {
  if (typeof string === 'string') {
    return string[0].toUpperCase() + string.slice(1)
  } else {
    return false;
  }
}
module.exports = getFirstSymbUp;

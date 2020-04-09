function trimTheString(string, number) {
  if (number >= string.length) {
    return string;
  } else {
    return string.substring(0, number - 1) + '…';
  }
}
module.exports = trimTheString;

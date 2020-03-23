function removeSpaces(string) {
  if (string[0] === ' ' && string[string.length - 1] === ' ') {
    return string.slice(1, -1);
  } else {
    return string;
  }
}
module.exports = removeSpaces;

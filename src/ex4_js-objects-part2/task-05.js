function isIncludeSubstring(string1, string2) {
  if (string1.includes(string2)) {
    return true;
  }
  else {
    return false;
  }
}
module.exports = isIncludeSubstring;

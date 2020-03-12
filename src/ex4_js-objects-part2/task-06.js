function camelizeString(text) {
  return text.toLowerCase()
    .split(' ')
    .map((x) => x.charAt(0).toUpperCase() + x.substring(1))
    .join(' ');
}
module.exports = camelizeString;

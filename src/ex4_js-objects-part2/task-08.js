function getLowerCase(string) {
  return string
    .toLowerCase()
    .split(' ')
    .map((word, i) => i === 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}
module.exports = getLowerCase;

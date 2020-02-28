function typeChecker(data) {
  if (typeof data === 'number' && !isNaN(data)) {
    return 'number';
  } else if (typeof data === 'string') {
    return 'string';
  } else {
    return undefined;
  }
}
module.exports = typeChecker;

function copyTheObj(object) {
  let objectCopy = Object.assign({}, object);
  return objectCopy;
}
module.exports = copyTheObj;

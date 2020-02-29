function findKeyInObj(keyName, object) {
  if (keyName in object) {
    return true;
  } return false;
}
module.exports = findKeyInObj;

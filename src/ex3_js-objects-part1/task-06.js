function getDeepCopy(object) {

  var emptyArr = [];
  var emptyObj = {};

  if (object instanceof Array) {
    for (let key of object) {
      if (Object.is(key, 'object')) {
        emptyArr.push(getDeepCopy(key));
      } else emptyArr.push(key);
    }
    return emptyArr;
  }

  for (let key in object) {
    if (typeof object[key] === 'object') {
      emptyObj[key] = getDeepCopy(object[key]);
    } else {
      emptyObj[key] = object[key];
    }
  }
  return emptyObj;
}
  module.exports = getDeepCopy;

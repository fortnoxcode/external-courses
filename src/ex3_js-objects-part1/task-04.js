function assignNewProp(prop, object) {
  if (prop in object) {
    return true;
  } else {
    object[String(prop)] = 'new';
  }
  return object;
}
module.exports = assignNewProp;

function getObjProps(obj) {
  for (let prop in obj) {
    console.log(prop + ': ' + obj[prop]);
  }
  return undefined;
}
module.exports = getObjProps;

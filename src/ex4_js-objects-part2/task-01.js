function getPropertyInProto(key, object) {
  return Object.getPrototypeOf(object)[key];
}

module.exports = getPropertyInProto;

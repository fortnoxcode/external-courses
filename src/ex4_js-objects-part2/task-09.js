function pasteString(mainString, insString, num) {
  let newSentence = mainString.split(' ');
  newSentence.splice(num + 1, 0, insString);
  return newSentence.join(' ');
}
module.exports = pasteString;

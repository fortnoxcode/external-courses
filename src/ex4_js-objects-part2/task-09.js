function pasteString(mainString, insString, num) {
  num += 1;
  let newSentence = mainString.split(' ');
  let newArr = [...newSentence.slice(0, num), insString, ...newSentence.splice(num)]
    return newArr.join(' ');
}
module.exports = pasteString;

function pasteString(mainString, insString, num) {
  let newSentence = mainString.split(' ');
  let newArr = [
        // num + 1 – это костыль, без этого тесты не проходят (я не знаю, как без костыля)
        ...newSentence.slice(0, num + 1),
        insString,
        ...newSentence.splice(num + 1)
  ]
  return newArr.join(' ');
}
module.exports = pasteString;

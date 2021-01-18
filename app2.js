function changeWords(wordsArr) {
  // return wordsArr.map((word) => convertString(word));
  var changed = wordsArr.map(function (word) {
    return word;
  });
  return changed;
}
console.log(changeWords(["slowo1", "slowo2"]));

// "use strict";

const maxZnakow = 6;
// let frString = `Aachen, Aachenem, Aachenie, Aachenowi, Aachenu
// Aalborg, Aalborgiem, Aalborgowi, Aalborgu
// abba, abbach, abbami, abbą, abbę, abbie, abbo, abbom, abbowie, abbów, abby
// Abba, Abbą, Abbę, Abbie, Abbo, Abby
// ABBA, ABB-ą, ABB-ę, ABB-ie, ABB-o, ABB-y`;
let frString = `abba, abbach, abbami, abbą
Abba, Abbą, Abbę
ABBA, ABB-ą, ABB-ę`;

console.log(`same slowa`, frString);

const frWierszeArr = frString.split("\n");
console.log(`wierszeArr`, frWierszeArr);

const frSlowaArr = frWierszeArr.map((verse) => verse.split(", "));
console.log(`każdy wiersz to array. frSlowaArr`, frSlowaArr);

let fr = frSlowaArr.map((verseArr) => [verseArr[0], verseArr.map(changeWords)]);
console.log(
  `każdy wiersz to arr skladajacyc się z 1. słowa i drugi elementem jest cały wiesz - arr. usunieto nielitery
`,
  fr
);

function changeWords(wordsArr) {
  // return wordsArr.map((word) => convertString(word));
  console.log("l. 30", wordsArr);
  var changed = wordsArr.map(function (word) {
    return word;
  });
  return changed;
}
/* 
function convertString(phrase) {
  let str = phrase.toLowerCase().replace(/[^a-z]/g, "");
  const charMap = {
    ą: "a",
    ę: "e",
    ł: "l",
    ć: "c",
    ń: "n",
    ś: "s",
    ó: "o",
    ź: "z",
    ż: "z",
  };

  const rx = /(ą|ę|ł|ć|ń|ś|ó|ź|ż)/g;

  // if any non-english charr exists,replace it with proper char
  if (rx.test(str)) {
    str = str.replace(rx, function (m, key) {
      return charMap[key];
    });
  }

  return str;
}
 */
// var fr = ["one", "two", "three"];
// fr = fr.map(bigArr => [bigArr[0], bigArr[1].map(word => word.replace(/[^a-zA-Z]/g, "")]);
console.log(fr);

// var arr = ["one", "two", "three"];
// function wylacznieLitery
// arr.forEach(function (part, index) {
//   arr[index] = "four";
// });
// console.log(arr);

// usunąc znaki typu - ' . ? SPACE
/* 
const array1 = [
  ["a", "b", "c"],
  ["d", "e", "f"],
];
array1.forEach((el) => el.forEach((element) => console.log(element)));
// expected output: "a"
// expected output: "b"
// expected output: "c"
 */

// let x = x.replace(/[^a-zA-Z]/g, "");
/* 
// How for.each actually works:
var arr = ["one", "two", "three"];
arr.forEach(function (part, index) {
  arr[index] = "four";
});
console.log(arr);
//
// Now if array arr was an array of reference types, the following code will work because reference types store a memory location of an object instead of the actual object.
//
var arr = [{ num: "one" }, { num: "two" }, { num: "three" }];
arr.forEach(function (part, index) {
  // part and arr[index] point to the same object
  // so changing the object that part points to changes the object that arr[index] points to
  part.num = "four";
});
console.log(arr[0].num);
console.log(arr[1].num);
console.log(arr[2].num);
console.log(arr);
//
 */
// usunąć dłuższe niż limit
// wywalić puste wiersze ??
// duże lietry na małe, // pozamiaeniać nieangielskie znaki
// zrobic listę [slowoWlasciwe, slowoZrodlowe
// przesegregować
// usunąć duplikaty a jednocześnie we właściwym słowie dopisać

// spr jak długi string js

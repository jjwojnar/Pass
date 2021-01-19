"use strict";

const maxZnakow = 6;
// let frString = `Aachen, Aachenem, Aachenie, Aachenowi, Aachenu
// Aalborg, Aalborgiem, Aalborgowi, Aalborgu
// abba, abbach, abbami, abbą, abbę, abbie, abbo, abbom, abbowie, abbów, abby
// Abba, Abbą, Abbę, Abbie, Abbo, Abby
// ABBA, ABB-ą, ABB-ę, ABB-ie, ABB-o, ABB-y`;
let frString = `abcdefgh
abc xyz
abba, abbach, abbami, abbą
Abba, Abbą, Abbę
ABBA, ABB-ą, ABB-ę`;

/* console.log(
  `same slowa:
`,
  frString
); */

const frWierszeArr = frString.split("\n");
/* console.log(
  `
========
wierszeArr:
`,
  frWierszeArr
); */

const frSlowaArr = frWierszeArr.map((verse) => verse.split(", "));
/* console.log(
  `
========
każdy wiersz to array. frSlowaArr`,
  frSlowaArr,
  `
========
  `
); */

function removeDuplicates(array) {
  return [...new Set(array)];
}

const maxLength = 5;

let fr = frSlowaArr.map((verseArr) => [
  verseArr[0],
  removeDuplicates(
    // usunięto duplikaty po  tym jak słowa mają tylko angielskie znaki i małe litery
    verseArr
      .map((word) => convertString(word)) // tylko małe litery z alfabetu angielskiego
      .filter((word) => word.length <= maxLength) // nie dłuższe słowaniż limit znaków
  ),
]);

function convertString(phrase) {
  let str = phrase.toLowerCase();

  const charMap = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };

  const rx = /(ą|ć|ę|ł|ń|ó|ś|ź|ż)/g;

  // if any non-english charr exists,replace it with proper char
  if (rx.test(str)) {
    str = str.replace(rx, function (m, key) {
      return charMap[key];
    });
  }

  // if there are other invalid chars, convert them into blank spaces
  str = str.replace(/[^a-z]/gi, "");

  return str;
}

/* console.log(
  `każdy wiersz to arr skladajacyc się z 1. słowa i drugi elementem jest cały wiesz - arr. usunieto nielitery
`,
  fr
); */
// wywalić puste wiersze
const frNoEmpty = fr.filter((element) => element[1].length > 0);

console.log("frNoEmpty", frNoEmpty, "==========");

// zrobic listę [slowoWlasciwe, slowoZrodlowe
/* 
frOdwr = frNoEmpty.map((el) => el);
console.log(frOdwr);
 */
// przesegregować

// usunąć duplikaty a jednocześnie we właściwym słowie dopisać

// spr jak długi string js

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

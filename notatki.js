// o rodzajach A TypedArray object describes an array-like view of an underlying binary data buffer. (tych do Crypto.getRandomValues())
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

/****************************************
trochę dłuższy string
****************************************/
// let frString = `Aachen, Aachenem, Aachenie, Aachenowi, Aachenu
// Aalborg, Aalborgiem, Aalborgowi, Aalborgu
// abba, abbach, abbami, abbą, abbę, abbie, abbo, abbom, abbowie, abbów, abby
// Abba, Abbą, Abbę, Abbie, Abbo, Abby
// ABBA, ABB-ą, ABB-ę, ABB-ie, ABB-o, ABB-y`;

/****************************************
I CL (same slowa)
****************************************/
/* console.log(
  `same slowa:
`,
  frString
); */

/****************************************
II CL (wierszeArr)
****************************************/
/* console.log(
  `
========
wierszeArr:
`,
  frWierszeArr
); */

/****************************************
przerabianie słów wersja Array
****************************************/
/* 
function removeDuplicates(array) {
  return [...new Set(array)];
}

const maxLength = 5;

let fr = frSlowaArr.map((verseArr) => {
  zrodlo: verseArr[0],
  odmiany: removeDuplicates(
    // usunięto duplikaty po  tym jak słowa mają tylko angielskie znaki i małe litery
    verseArr
      .map((word) => convertString(word)) // tylko małe litery z alfabetu angielskiego
      .filter((word) => word.length <= maxLength) // nie dłuższe słowaniż limit znaków
  ),
  });

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
*/

/****************************************
III CL (każdy wiersz to arr skladajacyc się z 1. słowa i drugi elementem jest cały wiesz - arr. usunieto nielitery)
****************************************/
/* console.log(
  `każdy wiersz to arr skladajacyc się z 1. słowa i drugi elementem jest cały wiesz - arr. usunieto nielitery
`,
  fr
); */

/* 
console.log(
  `
========
każdy wiersz to array. frSlowaArr`,
  frSlowaArr,
  `
========
  `
);
 */

/* 
// wywalić puste wiersze
const frNoEmpty = fr.filter((element) => element[odmiany].length > 0);

console.log("frNoEmpty", frNoEmpty, "==========");
 */
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

/* // czemu to nie działało?
let fr = frSlowaArr.map((verseArr) => {
  zrodlo: verseArr[0],
  odmiany: removeDuplicates(
    // usunięto duplikaty po  tym jak słowa mają tylko angielskie znaki i małe litery
    verseArr
      .map((word) => convertString(word)) // tylko małe litery z alfabetu angielskiego
      .filter((word) => word.length <= maxLength) // nie dłuższe słowaniż limit znaków
  ),
  });
 */

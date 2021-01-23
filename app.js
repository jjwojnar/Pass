"use strict";
/* 
SŁOWNIK, max długość słów, ile słów
*/
const maxLength = 5;
const noOfWords = 4;

let dictionary = `abcdefgh
abc xyz
abba, abbach, abbami, abbą
Abba, Abbą, Abbę
ABBA, ABB-ą, ABB-ę`;

/* 
ZE STRINGA DO TABLICY
*/
// cały słownik to tablica, każdy wiersz (wszytskie odmainy słowa) element tablicy - to string
const frWierszeArr = dictionary.split("\n");
// słownik to tablica, zawierająca tablice (wszytskie odmainy słowa). Elementy 2. poziomu tabl to stringi - słowa (odmiany)
const frSlowaArr = frWierszeArr.map((verse) => verse.split(", "));

/* 
TABLICA z obiektami źrółowsłów+odmiany
 */
// konstruktor aby przerobić 1 wiersz / tablicę na obiekt zawierający źródłosłów i tablicę z odmianami
function Word(array) {
  this.zrodlo = array[0];
  this.slowaArr = array;
}

// przerabia tablicę tak, że 1 wiersz / tablica/ -> na obiekt zawierający źródłosłów i tablicę z odmianami
let frSlowaObjAuto = frSlowaArr.map((item) => new Word(item));
// console.log(frSlowaObjAuto);

/* 
SŁOWA(odmiany) znaki tylko angielskie, małe liter; BEZ DUPLIKATÓW, BEZ SŁÓW GDZIE L. ODMIAN = 0
 */
// funkcja, która przerabia słowa
function convertString(phrase) {
  // na małe litery:
  let str = phrase.toLowerCase();

  // usuwa znaki polskie:
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

  // deletes invalid chars, (convert them into blank spaces)
  str = str.replace(/[^a-z]/gi, "");

  return str;
}

// funkcja, która usuwa duplikaty
function removeDuplicates(array) {
  return [...new Set(array)];
}

// najpierw przerabia słowa, potem usuwa duplikaty
frSlowaObjAuto.forEach((element) => {
  element.slowaArr = removeDuplicates(
    element.slowaArr
      .map((word) => convertString(word)) // tylko małe litery z alfabetu angielskiego
      .filter((word) => word.length <= maxLength) // nie dłuższe słowa niż limit znaków
  );
});

// jeżeli zostaną słowa, gdzie wszytskie odmiany są za długie (pusta tablica) to usuwa te pozycję
frSlowaObjAuto = frSlowaObjAuto.filter(
  (element) => element.slowaArr.length > 0
);

console.log(frSlowaObjAuto);

/* 
TABLICA OBIEKTÓW: 1 odmian, 2 źródłosłowów
 */
// przerabia aby to odmiany były 'rekordami' (obiekt), mające ekstra słowo/a od których pochodzą
// sortuje
// usuwa/łączy duplikaty

/* 
GENERUJE LICZBY LOSOWE -> losuje słowa
*/

/* przycinanie słów */
// jeżeli chce się bardziej przyciąć słowa (max l. znaków)
// const cutWords = 4

/* przycinanie passphrase */
// const maxPassphraseLength = 25;

/* 
prezentuje słowa oddzielone myślinikami
*/

// pomysły na feachery:
/* 
- wyświetlanie siły hasła (uproszczone, nie licze tego, że np. /z nie waży / żnie wazy/ itp. to ten sam ciąg znaków) i że jak się przycina a dożo słów jest nie... to zmniejsza się liczba opcji; social engeeneering oraz tego, że można wylosować hasło podobne lub takie same jak hasła z baz haseł uzywanych do łamania haseł (typu Correct Horse Battery Staple)
- liczby, znaki, słowa, przycięte słowa (jw), domyślne passpharese (z DUŻĄ, małą, cyfrą i znakiem specjalnym)
- zaawansowane: -> wybrać ile max / min ma być konkretnych rzeczy
- jeżeli słowa to czym oddzielane: znak (opcja do wpisania jaki), duże litery, spacje, mieszanka
- utrudniacze w losowych miejscach - jakie + ile
- wyświetlanie znkaów innymi kolorami, wizualne oddzielanie słów mimo, że brak spacji
- wybieranie ustawień: 4/6/8/20 cyfr, tylko słowa (max4 - telefon), orange, 2słowa(1 losowy przerywnik), 3słowa (DUŻA i znak/cyfra), 4 słowa (DUŻA, cyfra i znak), do x (dom. 30) znaków-max y (dom.10) na słowo-w losowych miejscach przeszkadzajki, NO-SHIFT-x(dom.2) słów y znaków max na słowo losowe (dom. 8), przeszkadzajki (dom. 2)
- tworzenie takich ustawień i zapisywanie do pliku
- wczytywanie tych ustawień oraz słownika
*/

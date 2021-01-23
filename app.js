"use strict";
/* 
SŁOWNIK, max długość słów, ile słów
*/
const maxLength = 5;
const noOfWords = 4;

let preDictionary = `3D
500 plus
a
a.
A
A4
a6w
A6W
aa
aa
AA
aaa
a.a.C.
A.A.C.
a.a.Ch.
Aachen
Aachen, Aachenem, Aachenie, Aachenowi, Aachenu
Aalborg, Aalborgiem, Aalborgowi, Aalborgu
aalborski, aalborscy, aalborska, aalborską, aalborskich, aalborskie, aalborskiego, aalborskiej, aalborskiemu, aalborskim, aalborskimi, aalborsku, nieaalborscy, nieaalborska, nieaalborską, nieaalborski, nieaalborskich, nieaalborskie, nieaalborskiego, nieaalborskiej, nieaalborskiemu, nieaalborskim, nieaalborskimi
Aalto
AAN
AA-owiec, AA-owca, AA-owcach, AA-owcami, AA-owce, AA-owcem, AA-owcom, AA-owcowi, AA-owców, AA-owcu, AA-owcy, AA-owcze
AAP
Aardvark, Aardvarkiem, Aardvarkowi, Aardvarku
Aare
Aargau
Aarhus
aaronowy, aaronowa, aaronową, aaronowe, aaronowego, aaronowej, aaronowemu, aaronowi, aaronowych, aaronowym, aaronowymi, nieaaronowa, nieaaronową, nieaaronowe, nieaaronowego, nieaaronowej, nieaaronowemu, nieaaronowi, nieaaronowy, nieaaronowych, nieaaronowym, nieaaronowymi
Aaron, Aarona, Aaronach, Aaronami, Aaronem, Aaronie, Aaronom, Aaronowi, Aaronowie, Aaronów, Aarony
Aaron, Aarona, Aaronem, Aaronie, Aaronowi
Aar, Aarem, Aarowi, Aaru, Aarze
Aasen, Aasena, Aasenach, Aasenami, Aasenem, Aasenie, Aasenom, Aasenowi, Aasenowie, Aasenów, Aaseny
Ab
aba
ABA
abachit, abachicie, abachitach, abachitami, abachitem, abachitom, abachitowi, abachitów, abachitu, abachity
Abacja, Abacją, Abację, Abacji, Abacjo
abadanka, abadance, abadanek, abadankach, abadankami, abadanką, abadankę, abadanki, abadanko, abadankom
Abadan, Abadanem, Abadanie, Abadanowi, Abadanu
abadańczyk, abadańczycy, abadańczyka, abadańczykach, abadańczykami, abadańczyki, abadańczykiem, abadańczykom, abadańczykowi, abadańczyków, abadańczyku
abadański, abadańscy, abadańska, abadańską, abadańskich, abadańskie, abadańskiego, abadańskiej, abadańskiemu, abadańskim, abadańskimi, abadańsku, nieabadańscy, nieabadańska, nieabadańską, nieabadański, nieabadańskich, nieabadańskie, nieabadańskiego, nieabadańskiej, nieabadańskiemu, nieabadańskim, nieabadańskimi
Abaddon, Abaddona, Abaddonem, Abaddonie, Abaddonowi
abadyci, abadytach, abadytami, abadytom, abadytów, abadyty
abaja, abai, abaj, abajach, abajami, abają, abaje, abaję, abajo, abajom
abakanka, abakance, abakanek, abakankach, abakankami, abakanką, abakankę, abakanki, abakanko, abakankom
Abakanowicz, Abakanowicza, Abakanowiczach, Abakanowiczami, Abakanowicze, Abakanowiczem, Abakanowiczom, Abakanowiczowi, Abakanowiczowie, Abakanowiczów, Abakanowiczu
abakan, abakanach, abakanami, abakanem, abakanie, abakanom, abakanowi, abakanów, abakanu, abakany
Abakan, Abakanem, Abakanie, Abakanowi, Abakanu
abakańczyk, abakańczycy, abakańczyka, abakańczykach, abakańczykami, abakańczyki, abakańczykiem, abakańczykom, abakańczykowi, abakańczyków, abakańczyku
abakański, abakańscy, abakańska, abakańską, abakańskich, abakańskie, abakańskiego, abakańskiej, abakańskiemu, abakańskim, abakańskimi, abakańsko, abakańsku, nieabakańscy, nieabakańska, nieabakańską, nieabakański, nieabakańskich, nieabakańskie, nieabakańskiego, nieabakańskiej, nieabakańskiemu, nieabakańskim, nieabakańskimi, nieabakańsko
abakańskość, abakańskości, abakańskościach, abakańskościami, abakańskością, abakańskościom
abaka, abace, abak, abakach, abakami, abaką, abakę, abaki, abako, abakom
abakus, abakusa, abakusach, abakusami, abakusem, abakusie, abakusom, abakusowi, abakusów, abakusy
abak, abaka, abakach, abakami, abaki, abakiem, abakom, abakowi, abaków, abaku
abalietas
Abana, Abaną, Abanę, Abanie, Abano, Abany
abandon, abandonach, abandonami, abandonem, abandonie, abandonom, abandonowi, abandonów, abandonu, abandony
Abaris, Abarisa, Abarisem, Abarisie, Abarisowi
abatysa, abatys, abatysach, abatysami, abatysą, abatysę, abatysie, abatyso, abatysom, abatysy
abat, abaci, abacie, abata, abatach, abatami, abatem, abatom, abatowi, abatów, abaty
abazja, abazjach, abazjami, abazją, abazje, abazję, abazji, abazjo, abazjom, abazyj
abazyński, abazyńscy, abazyńska, abazyńską, abazyńskich, abazyńskie, abazyńskiego, abazyńskiej, abazyńskiemu, abazyńskim, abazyńskimi, abazyńsku, nieabazyńscy, nieabazyńska, nieabazyńską, nieabazyński, nieabazyńskich, nieabazyńskie, nieabazyńskiego, nieabazyńskiej, nieabazyńskiemu, nieabazyńskim, nieabazyńskimi
abażurek, abażurka, abażurkach, abażurkami, abażurki, abażurkiem, abażurkom, abażurkowi, abażurków, abażurku
abażur, abażura, abażurach, abażurami, abażurem, abażurom, abażurowi, abażurów, abażuru, abażury, abażurze`;
/* let preDictionary = `abcdefgh
abc xyz
abba, bbbach, cbbami, dbbą
Abba, Bbbą, Cbbę
ABBA, BBB-ą, CBB-ę`; */

/* 
ZE STRINGA DO TABLICY
*/
// cały słownik to tablica, każdy row (wszytskie odmiany słowa) element tablicy - to string
const dictionary = preDictionary.split("\n");

// słownik to tablica, zawierająca tablice (wszytskie odmainy słowa). Elementy 2. poziomu tabl to stringi - słowa (odmiany)
const dictionary2D = dictionary.map((verse) => verse.split(", "));

/* 
TABLICA z tablicami źrółowsłów+odmiany
 */
// przerabia tablicę tak, że 1 row / tablica/ -> na tablicę zawierającą źródłosłów [0] i tablicę z odmianami [1]
let zrodloPlusOdmiany = dictionary2D.map((array) => [array[0], array]);

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
  str = str.replace(/[^a-z\d]/gi, "");

  return str;
}

// przerabia słowa
const przerobioneOdmMaxChar = zrodloPlusOdmiany.map((row) => [
  row[0],
  row[1]
    .map((word) => convertString(word))
    .filter((word) => word.length <= maxLength),
]);

// funkcje, które "rekordy" bez odmian ORAZ usuwają duplikaty odmian
const bezPustychOdm = przerobioneOdmMaxChar.filter((el) => el[1].length > 0);

function bezDuplikatow(arr) {
  return arr.map((row) => [row[0], [...new Set(row[1])]]);
}

/* 
TABLICA: 1 odmian, 2 źródłosłowów
 */
// przerabia aby to odmiany były 'rekordami' mające ekstra słowo/a od których pochodzą
const odmianaIzrodla = bezDuplikatow(bezPustychOdm)
  .map((row) => row[1].map((word) => [word, [row[0]]]))
  .flat();

// sortuje
function sortFunction(a, b) {
  if (a[0] === b[0]) {
    return 0;
  } else {
    return a[0] < b[0] ? -1 : 1;
  }
}

let posortowane = odmianaIzrodla.sort(sortFunction);

// usuwa/łączy duplikaty
function usunDup(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i][0] === arr[i - 1][0]) {
      arr[i - 1][1].push(arr[i][0]);
      arr.splice(i, 1);
    }
  }
  return arr;
}
const polaczoneDuplikaty = usunDup(posortowane);

// const usunieteDuplZrodel = bezDuplikatow(polaczoneDuplikaty);
const finalDictionary = bezDuplikatow(polaczoneDuplikaty);
const dlFinDict = finalDictionary.length;

/* 
GENERUJE LICZBY LOSOWE -> losuje słowa
*/
// LICZBA LOSOWA
console.log(dlFinDict);
// tu math rand, w rzeczywistości później crypto
function losowa(no) {
  return Math.floor(Math.random() * no);
} // returns a random integer from 0 to "no"

console.log(
  losowa(dlFinDict),
  losowa(dlFinDict),
  losowa(dlFinDict),
  losowa(dlFinDict)
);

console.log(finalDictionary);

/* przycinanie słów */
// jeżeli chce się bardziej przyciąć słowa (max l. znaków)
// const cutWords = 4

/* przycinanie passphrase */
// dodac minimalną ilość słów
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

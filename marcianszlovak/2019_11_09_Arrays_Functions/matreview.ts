sum(
  2
); /* a függvény a zárójel miatt hívódik meg
meghívjuk a függvényt, lefut, létrejön az n, létrejön a result, aztán lefut a for loop 

return lefut ha vége a for loopnak, */

function isBigNumber(n: number) {}

console.log(isBigNumber(11)); // isBigNumber(11 <-- ez ad értéket az n-nek) function isBigNumber szerint

/* spread operator

const myNumbers = [1,2,3];
const yourNumbers = [...myNumbers]; ... myNumbers listából kiszedi az elemeket és bemásolja egyesével

ha listát akarunk másolni, akkor spread operator

array methods 

*/

const myNumbers2 = [99, 32, 213, 1292];

for (let i = 0; i < myNumbers2.length; i++);
{
  console.log(myNumbers2[i]);
}

myNumbers2.forEach(function(elem: number) {
  // nem hívjuk meg a függvényt, mert nincs zárójel
  console.log(elem);
});

let numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item, index, arr) {
  // forEach létrehozza a myFunction függvényt, majd
  arr[index] = item * 10;
}

function myForEach(arr: any[], fn: Function);
console.log("my for each start");
{
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i, arr);
  }
  console.log("my for each end");
}
myForEach([1, 2, 3], function(elem: number, index: number, array: number) {
  console.log(elem);
});

[1, 2, 3].forEach(function asder() {
  console.log("asder");
});

/* forEach = hajtsd végre a változtatásokat az array elemein 
forEach = undefined
map = new array
filter = new array, megnézni az állítást az összes elemre, ha igaz megtartjuk, ha nem akkor nem
*/

/* method vs function 

How else can we declare functions?
*/

const add = function kakaó(a: number) {};

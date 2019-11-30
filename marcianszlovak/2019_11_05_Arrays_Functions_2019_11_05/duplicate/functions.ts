"use strict";

//SOLID
//Single Responsibility Principle = 1 függvény 1 dolgot csináljon

//DRY
//Don't Repeat Yourself

function greeting() {
  console.log("hello");
  console.log("este van"); // tároljuk el a sorokat, addig meg se nézi amíg nem hívjuk meg őket. először
} // létrehozni, utána tárolni, függvény egy doboz amibe bármit bele lehet dobálni és kijön 1 dolog.

greeting();

function greet(lname: string, fname: string): void {
  // name: string --> meg kell adni a típusát is: void megmondja mi az ami kimegy és mi az ami bemegy
  console.log("Hello" + lname + fname + "!"); // <-- függvény törzse amit meg is csinál
}

greet("Zsuzsi", "A"); // hello name-t ide fogja írni, + zsuzsit. tehát felhasználja a greet funkciót és hozzáadja amit a greet("név")-be írunk bele

function consoleAdd(a: number, b: number): void {
  console.log(a + b);
}
let result = consoleAdd(1, 3);
// console.log(result * 2);

function add(a: number, b: number): number {
  return a + b; // összeadja a kettő értéket és visszadja oda ahol meghívtad ezt a függvényt,
  // akkor tudok valamire később hivatkozni ha ott van a return
}
console.log("1 + 3 =");
let result2 = add(1, 3); // meghívjuk az add függvényt az új változóval () miatt, add(1,3) fog lefutni
console.log(result2); // ez logolja a függvényt, mivel a result2 egyenlő a függvénnyel. mindig kell egy változó
// ami elnevezi a függvényt

function add2(a: number, b: number): number {
  let eredmény = a + b;
  return eredmény;
}

console.log("1+3 =");
let result3 = add(1, 3);
console.log(result3);

let egyikszám = 10;
let b = 20;
let result4 = add(egyikszám, b);
add(2, 3);
console.log(add(2, 3));

// a 2 let fölösleges, ezzel is ki tudom írni
/* létrejön az egyikszám = 10 (a), létrehozzuk a b-t = 20. globális átkerül a lokálisba
az a és a b a funkcióban csak placeholderek. result 4-be beledobom a két számot és eltárolódnak az a és a b változóba.
létrejön az eredmény, returnoli a 30-at, 

 */

function doubleAdd(a: number, b: number): number {
  return (
    add(a, b) + add(a, b + 1)
  ); /* addab+1 = b-hez hozzáadunk egyet. alapból az a 30, b 2, b-hez hozzáad 1-et
  és miután megvan összeadja add(a, b) + add(a, b + 1) és annak kijön a végeredménye, ami 32+33=65
  
  
  
  */
}

let result5 = doubleAdd(result4, 2); // nem tudjuk mivel kell visszatérni - return

export { };

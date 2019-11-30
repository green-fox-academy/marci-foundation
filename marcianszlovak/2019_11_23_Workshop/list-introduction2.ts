const listA = "Apple, Avocado, Blueberries, Durian, Lychee";
const listB = "Apple, Avocado, Blueberries, Durian, Lychee";
// const benneVane = listA.match("Durian");

if (listA.search("Durian") > -1) {
  console.log("benne van");
}

let replacedlistB = listB.replace("Durian", "");
console.log(replacedlistB);

let arrayString = listB.split(", ");
let arrayString2 = listA.split(", ");
//console.log(arrayString);
arrayString.splice(3, 0, "Kiwifruit");
// console.log(arrayString);

if (arrayString.length != arrayString2.length) {
  console.log("nem egyeznek");
} else {
  console.log("one is longer than the other");
}

console.log(arrayString);
arrayString.indexOf(" Avocado", 0);
arrayString2.indexOf("Durian");

console.log(arrayString.indexOf("Avocado"));

const extraFruits = ["Fruit", "Pomelo"];
const extraGyümi = arrayString2.concat(extraFruits)
// console.log(extraGyümi);
console.log(arrayString[2]);
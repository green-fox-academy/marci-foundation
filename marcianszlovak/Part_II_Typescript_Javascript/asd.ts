var myString = "Bar\"c\"odekiller is the 'best' thing ever";
var myString2 = "no, it's not true";

if (myString.indexOf("best") === -1) {
  console.log("nem jó szóra kerestél");
} else {
  console.log("a 'best' szó itt kezdődik position" + myString.indexOf("best"));
}

console.log(myString === myString2);
console.log(myString < myString2);

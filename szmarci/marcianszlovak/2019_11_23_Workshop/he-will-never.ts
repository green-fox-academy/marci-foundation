"use strict";
// Things are a little bit messed up
// Your job is to decode the notSoCrypticMessage by using the hashmap as a look up table
// Assemble the fragments into the out variable

let notSoCrypticMessage: number[] = [
  1,
  12,
  1,
  2,
  11,
  1,
  7,
  11,
  1,
  49,
  1,
  3,
  11,
  1,
  50,
  11
];

let hashmap = {
  7: "run around and desert you",
  50: "tell a lie and hurt you ",
  49: "make you cry, ",
  2: "let you down",
  12: "give you up, ",
  1: "Never gonna ",
  11: "\n",
  3: "say goodbye "
};

/* let organizedList = [...new Set(notSoCrypticMessage)];

organizedList.sort(function(a, b) {
 return a - b;
}); */

// let output = Object.entries(hashmap).map(([key, value]) => ({ key, value }));

// console.log(output);

/*notSoCrypticMessage.forEach(function(number) {
  if (number === ) {
    console.log(Object.values(hashmap));
  }
});
// if arrayelement = key of object, print value of key but only once */

const out = notSoCrypticMessage.map(number => hashmap[number]).join("");
console.log(out);
export {};

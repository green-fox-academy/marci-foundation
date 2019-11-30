// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

const fs = require("fs");

let uniqueIP = fs
  .readFileSync("log.txt", "utf-8")
  .toString()
  //.split("\n");
let sub = uniqueIP.slice(24, 1820);

let ju = uniqueIP.indexOf("32.28.73.45");
let ja = uniqueIP.indexOf("10.44.71.36");

console.log(ju);
console.log(ja);
console.log(sub);
console.log(typeof uniqueIP);
export {};

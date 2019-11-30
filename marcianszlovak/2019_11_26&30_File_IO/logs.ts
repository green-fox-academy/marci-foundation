// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

const fs = require("fs");
/*function uniqueIP(address: string) {
const uniqArray = address.split("/n");
  const onlyIP = uniqArray.filter("")
  console.log(onlyIP);
} */

let uniqueIP = fs
  .readFileSync("log.txt")
  .toString()
  .split("\n");

// for each UNIQUE ip log to console
let filteredArray = uniqueIP.filter(function(item, pos) {
  return uniqueIP.indexOf(item) === pos;
});

console.log(filteredArray);
console.log(uniqueIP);

export {};

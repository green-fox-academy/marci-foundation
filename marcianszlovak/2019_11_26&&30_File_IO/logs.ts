// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

const fs = require("fs");

let uniqueIP: string[] = fs
  .readFileSync("log.txt", "utf-8")
  .toString()
  .split("\n");
let IP: string[] = [];

uniqueIP.forEach(element => {
  IP.push(element.slice(27, 38));
});

let uniqueIP2: string[] = IP.filter((element: string, index: number) => {
  return IP.indexOf(element) === index;
});

console.log(uniqueIP2);
export {};

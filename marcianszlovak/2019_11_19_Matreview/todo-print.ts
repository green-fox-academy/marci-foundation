"use strict";
/* Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo
console.log(todoText); 

let todoText: string = ' - Buy milk\n'; */

let todoText: string = " - Buy milk\n";
let dodoText =
  todoText.concat((" - Download games")  + todoText.concat("  " + "-Diablo"));
console.log(dodoText);

// TO BE CONTINUED
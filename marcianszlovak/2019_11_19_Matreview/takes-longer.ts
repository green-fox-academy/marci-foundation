"use strict";
/* While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

console.log(quote); */

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

let search = quote.indexOf("you ");
let search2 = quote.indexOf(" you");
console.log(search, search2);
let completeQuote = 
  quote.slice(0, 20) + " always takes longer than " + quote.slice(21);

console.log(completeQuote);

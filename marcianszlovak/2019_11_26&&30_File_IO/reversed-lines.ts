// Create a method that decrypts reversed-lines.txt

import fs from "fs";

function reverseString(content: string) {
  return [...content].reverse().join("");
}
let reversed = fs.readFileSync("reversed-lines.txt", "utf-8");
console.log(reverseString(reversed));
/* let reversedFile = fs.readFileSync("reversed-lines.txt", "utf-8");
console.log(reverseString(reversedFile));*/
export {};

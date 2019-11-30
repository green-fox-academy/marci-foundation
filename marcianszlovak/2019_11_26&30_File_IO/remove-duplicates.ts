const fs = require("fs");

function doubles(content: string) {
  let newStr = "";
  for (let index = 0; index < content.length; index++) {
    if (index % 2 === 1) {
      newStr += content[index];
    }
  }
  return newStr;
}
let noDupes = fs.readFileSync("duplicated-chars.txt", "utf-8");
console.log(doubles(noDupes));
export {};

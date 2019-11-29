const fs = require("fs");
let fileRead = fs.readFileSync("duplicated-chars.txt", "utf-8");

function duplicateChars(fileName: string) {
  let unique = [...new Set(fileName)].sort().join("");
  // console.log(unique);
  return unique;
}

console.log(duplicateChars("duplicated-chars.txt"));

function tString(path: string, fileName: string) {
  let asd = fs.readFileSync(path.toString, "utf-8");
  console.log(asd);
  return asd;
}

tString("duplicated-chars.txt", "utf-8");

export {};

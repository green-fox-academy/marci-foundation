// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require("fs");

const MY_ERROR_MESSAGE = "0";
function fileCont(fileName: string) {
  const fileContent = fs.readFileSync(fileName);
  const lines = (fileContent.match(/\n/g) || "").length + 1;
  console.log(lines);
  return lines;
}

try {
  fileCont("./my-file.txt");
   //throw "My error";
} catch (error) {
   //console.log(MY_ERROR_MESSAGE);
  console.log(error.message);
  }


export {};

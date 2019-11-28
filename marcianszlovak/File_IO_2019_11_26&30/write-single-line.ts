// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

const fs = require("fs");
const ERROR_MESSAGE = "Unable to write file: my-file.txt"
function fileWrite(fileName: string, content: string) {
  const write = fs.writeFileSync(fileName, content);
  return write;
}

try {
  fileWrite("my-file.txt", "Marci");
} catch (error) {
  console.log(ERROR_MESSAGE);
}
export {};

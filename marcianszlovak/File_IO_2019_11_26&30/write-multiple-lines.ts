// Create a function that takes 3 parameters: a path, a word and a number
// and is able to write into a file.
// The path parameter should be a string that describes the location of the file you wish to modify
// The word parameter should also be a string that will be written to the file as individual lines
// The number parameter should describe how many lines the file should have.
// If the word is 'apple' and the number is 5, it should write 5 lines
// into the file and each line should read 'apple'
// The function should not raise any errors if it could not write the file.

const fs = require("fs");
// const file = fs.createWriteStream("./macska.txt");
function fWrite(path: string, word: string, number: string) {
  let path1 = fs.writeFileSync(path, word);
  // const write = fs.writeFileSync(word);
  // const lines = (write.match(/\n/g) || "").length + 1;
  for (let index = 0; index <= 5; index++) {
    if ((path1 = "macska.txt")) {
      fs.writeFileSync(path, word + "\n");
    }
  }
  return path1;
}

fWrite("macska.txt", "apple", "5");
export {};
 
// WORK IN PROGRESS
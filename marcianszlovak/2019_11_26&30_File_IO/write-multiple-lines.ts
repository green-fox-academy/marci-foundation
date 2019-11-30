// Create a function that takes 3 parameters: a path, a word and a number
// and is able to write into a file.
// The path parameter should be a string that describes the location of the file you wish to modify
// The word parameter should also be a string that will be written to the file as individual lines
// The number parameter should describe how many lines the file should have.
// If the word is 'apple' and the number is 5, it should write 5 lines
// into the file and each line should read 'apple'
// The function should not raise any errors if it could not write the file.

const fs = require("fs");

function multipleLines(path: string, word: string, number: number) {
  try {
    let line: string = "";

    for (let i: number = 0; number > i; i++) {
      line = line + (word + "\n");
    }

    fs.writeFileSync(path, line, "utf8");
  } catch (error) {
    console.log("THERE IS NO ERROR HERE");
  }
}

multipleLines("kiscica.txt", "apple", 5);

export {};

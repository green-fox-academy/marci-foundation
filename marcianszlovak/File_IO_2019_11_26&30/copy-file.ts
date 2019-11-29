// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require("fs");

function fileCopy(fileName1: string, fileName2: string) {
  try {
    fs.copyFileSync(fileName1, fileName2);
  } catch (error) {
    return false;
  }
  return true;
}
fileCopy("kiscica.txt", "nagycica.txt");
export {};

let lineCount = 4;

for (let i: number = 0; i < lineCount; i++) {
  let space = "";
  let numberOfStars = "";
  for (let j: number = lineCount - i - 1; j > 0; j--) {
    space = space + " ";
  }

  for (let k: number = 1 + 2 * i; k > 0; k--) {
    numberOfStars = numberOfStars + "*";
  }

  console.log(space + numberOfStars);
}

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

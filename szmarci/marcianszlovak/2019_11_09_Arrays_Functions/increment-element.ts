// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console

const numList = [1, 2, 3, 4, 5];

const incrementedNumber = numList[2];

console.log(incrementedNumber + 1);

export {};

const számlista = [1, 2, 3, 4, 5];
számlista.push(számlista[2]++);
console.log(számlista[2]);

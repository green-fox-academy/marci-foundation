// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc

const abc = ["Arthur", "Boe", "Chloe"];

function swap(input, index_A, index_B) {
  let név = input[index_A];
  input[index_A] = input[index_B];
  input[index_B] = név;
}

swap(abc, 0, 2);
console.log(abc);

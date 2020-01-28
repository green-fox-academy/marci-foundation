// codewars.com, projecteuler.net, hackerrank.com

let numbers: number[];
numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers[0]);

let numbersLength = numbers.length;
console.log(numbers[numbersLength - 1]); // utolsó elemet az arrayből
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
let matrix = [[0, 1], [2, 3]]; // array inside array

console.log(matrix[0][1]);

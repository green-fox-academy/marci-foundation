function addANumber(n: number) {
  if (n === 1) {
    return 1;
  } else {
    return n + addANumber(n - 1); // 7 + 6 + 5 + 4 + 3 + 2 + 1
  }
}

console.log(addANumber(7));

// with a for loop

function sumNumbers(n: number) {
  let sum = 0;
  for (let index = 1; index <= n; index++) {
    sum += index;
  }
  return sum;
}

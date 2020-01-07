function addANumber(n: number) {
  if (n === 1) {
    return 1;
  } else {
    return n + addANumber(n - 1); // 7 + 7 - 1
  }
}

console.log(addANumber(10));

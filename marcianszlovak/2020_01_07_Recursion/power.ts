function powerN(base: number, n: number): number {
  if (n === 0) {
    return 1;
  } else {
    return base * powerN(base, n - 1); ///
  }
}

// iterative

function powerNr(base: number, n: number): number {
  let result = 1;
  while (n--) {
    result *= base;
  }
  return result;
}

console.log(powerN(4, 3));

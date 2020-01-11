function powerN(base: number, n: number): number {
  // base = 4, n = 3
  if (n === 0) {
    // not true
    return 1;
  } else {
    return base * powerN(base, n - 1); // return 4 * powerN(4, 2)
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

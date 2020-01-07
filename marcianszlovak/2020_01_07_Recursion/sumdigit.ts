/* function sumDigits(a: number) {
  if (a === 0) {
    return 0;
  } else {
    return (a % 10) + sumDigits(a / 10);
  }
}

console.log(sumDigits(4634)); */

function sumDigits(a: number) {
  let remainder = a % 10;
  let sum = remainder;
  if (a >= 10) {
    let rest = Math.floor(a / 10);
    sum += sumDigits(rest);
  }
  return sum;
}

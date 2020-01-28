// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideByTen(a: number) {
  const rnumber = a / 10;
  if (a === 0) {
    console.log("fail");
  } else console.log(rnumber);
  return rnumber;
}

divideByTen(0);

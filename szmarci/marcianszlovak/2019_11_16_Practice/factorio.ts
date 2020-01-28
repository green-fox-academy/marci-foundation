// -  Create a function called `factorio`
//    that returns it's input's factorial

// const factorio1 = n => (!(n > 1) ? 1 : factorio1(n - 1) * n);

/* function factorio2(numba : number) {
  let asd = 1;
  for (i = 1; i <= numba; i++) {
    asd = asd * i;
  }
  return asd;
} */

function factorio(asd: number, x = 1) {
  while (asd > 0) x *= asd--;
  return x;
}

function bunnyEars(a: number) {
  if (a === 0) {
    return 0;
  } else {
    return 2 + bunnyEars(a - 1);
  }
}

console.log(bunnyEars(6));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let asd = [1, 2, 3, 4, 5, 6, 7];

const asdasd = asd.map(a => a + 2);
console.log(asdasd);

let macska = asd
  .forEach(currentItem => {
    return currentItem + 2;
  })
  .reduce((a: number, b: number) => a + b, 0);

console.log(macska);

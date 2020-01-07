function bunnyEars(a: number) {
  if (a === 0) {
    return 0;
  } else {
    return 2 + bunnyEars(a - 1);
  }
}

console.log(bunnyEars(6));

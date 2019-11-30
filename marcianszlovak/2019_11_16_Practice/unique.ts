//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

// const macskaszem = [1, 2, 3, 4, 5, 5, 23, 3];
function cicafül([]) {
  const macskaszem = [1, 2, 3, 4, 5, 5, 23, 3];
  const kiscica = [...new Set(macskaszem)];
  console.log(kiscica);
}

cicafül([]);

/* let kiscica = [1,2,3,3,4,5,5,5];
let kiscica2 = new Set(kiscica);

console.log(kiscica2); */

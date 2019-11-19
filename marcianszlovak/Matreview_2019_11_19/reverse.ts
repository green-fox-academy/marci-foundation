let reversed: string =
  "eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI";

function reverseString(string : any) {
  return reversed
    .split("")
    .reverse()
    .join("");
}

console.log(reverseString(reversed));

let reversed2: string =
  "eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI";

function reverseString2(string: any) {
  return [...string].reverse().join("");
}

console.log(reverseString2(reversed2));

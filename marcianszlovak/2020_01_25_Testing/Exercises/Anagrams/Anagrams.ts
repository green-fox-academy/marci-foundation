export default function Anagrams(a: string, b: string) {
  if (!a || !b || a.length !== b.length) {
    return false;
  }

  const aToLowerCase = a.toLowerCase();
  const bToLowerCase = b.toLowerCase();

  if (aToLowerCase === bToLowerCase) {
    return false;
  }

  const checkOne = aToLowerCase
    .split("")
    .sort()
    .join("");
  const checkTwo = bToLowerCase
    .split("")
    .sort()
    .join("");

  return checkOne === checkTwo;
}

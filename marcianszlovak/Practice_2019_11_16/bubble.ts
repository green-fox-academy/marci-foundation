//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

//  Example:
// console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
// console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]

const randomSzámok = [2, 3, 5, 7, 16, 76, 65];
let iLikeCats = true;
function ascendingOrder([]) {
  randomSzámok.sort(function(a, b) {
    if ((iLikeCats = false)) {
      return a - b;
    } else {
      return b - a;
    }
  });
}

ascendingOrder(randomSzámok);
console.log(randomSzámok);


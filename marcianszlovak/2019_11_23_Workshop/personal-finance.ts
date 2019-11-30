/* Personal finance
We are going to represent our expenses in a list containing integers.

Create a list with the following items.
500, 1000, 1250, 175, 800 and 120
Create an application which solves the following problems.
How much did we spend?
Which was our greatest expense?
Which was our cheapest spending?
What was the average amount of our spendings? */

const list = [500, 1000, 1250, 175, 800, 120];
let money = {
  spendings: function(array: any) {
    const sum = array.reduce((a: number, b: number) => a + b, 0);
    console.log(sum);
    return sum;
  },

  minimumSpending: function(array: any) {
    const minimum = Math.min(...array);
    console.log(minimum);
    return minimum;
  },

  maximumSpending: function(array: any) {
    const maximum = Math.max(...array);
    console.log(maximum);
    return maximum;
  },

  average: function(array: any) {
    const average =
      array.reduce((a: number, b: number) => a + b) / array.length;
    console.log(average);
    return average;
  }
};

money.average(list),
  money.maximumSpending(list),
  money.spendings(list),
  money.minimumSpending(list);

export {};

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
  f1: function spendings(array: any) {
    const sum = array.reduce((a: number, b: number) => a + b, 0);
    console.log(sum);
    return sum;
  },

  f2: function minimumSpending(array: any) {
    let minimum = Math.min(...array);
    console.log(minimum);
    return minimum;
  },

  f3: function maximumSpending(array: any) {
    let maximum = Math.max(...array);
    console.log(maximum);
    return maximum;
  },

  f4: function average(array: any) {
    let average = array.reduce((a: number, b: number) => a + b) / array.length;
    console.log(average);
    return average;
  }
};

money.f4([500, 1000, 1250, 175, 800, 120]),
  money.f2([500, 1000, 1250, 175, 800, 120]),
  money.f3([500, 1000, 1250, 175, 800, 120]),
  money.f1([500, 1000, 1250, 175, 800, 120]);

export {};

/* Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value */

class Counter {
  change: number;
  change1: number;
  constructor(change: number = 0, change1: number) {
    this.change = change;
    this.change1 = change1;
  }
  public addOne() {
    return this.change++;
  }
  public addAny(a: number) {
    return (this.change1 += a);
  }
  public get() {
    return this.change;
  }
  public reset() {
    let reset = (this.change -= this.change);
    let resetAll = (reset -= this.change1 -= this.change1);
    return resetAll;
  }
}

const number1 = new Counter(20, 20);
number1.addOne();
console.log(number1);
number1.addAny(10);
console.log(number1);
number1.reset();
console.log(number1);

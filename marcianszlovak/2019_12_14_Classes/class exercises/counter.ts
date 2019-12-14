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
  constructor(change: number = 0) {
    this.change = change;
  }
  public addOne() {
    return this.change++;
  }
  public addAny(a: number) {
    return (this.change = this.change + a);
  }
  public get() {
    return this.change.toString;
  }
  public reset() {
    return (this.change -= this.change);
  }
}

const number1 = new Counter(10);
number1.addOne();
console.log(number1);
number1.addAny(35);
console.log(number1);
number1.get();
console.log(number1);
number1.reset();
console.log(number1);

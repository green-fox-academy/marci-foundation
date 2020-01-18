export default abstract class Animals {
  name: string;
  age: number;
  legs: number;

  constructor(name: string, age: number, legs: number) {
    this.name = name;
    this.age = age;
    this.legs = legs;
  }

  getName() {
    return this.name;
  }

  abstract breed(): string;

  abstract eat(): string;
}

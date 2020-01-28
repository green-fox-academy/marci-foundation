class Dog {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public compare(dog: Dog): boolean {
    return dog.name === this.name;
  }
}

const bodri = new Dog("Bodri");
const fifi = new Dog("Fifi");

console.log(bodri.compare(fifi));

class Person {
  private age: number;
  private name: string;
  constructor(name: string, age: number) {
    if (age <= 0) {
      throw Error("Age can't be less than 0");
    }
    this.name = name;
    this.age = age;
  }

  public gettingOlder(): void {
    this.age++;
  }
}

export {};

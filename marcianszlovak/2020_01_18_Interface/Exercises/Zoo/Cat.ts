import Animal from "./Animal";

export default class Cat extends Animal {
  cuteOrNot: boolean;
  colorOfFur: string;

  constructor(
    name: string = "Cica",
    age: number = 3,
    legs: number = 4,
    cuteOrNot: boolean = true,
    colorOfFur: string = "black"
  ) {
    super(name, age, legs);
    this.cuteOrNot = cuteOrNot;
    this.colorOfFur = colorOfFur;
  }

  breed(): string {
    return "Like most mammals";
  }

  eat(): string {
    return "All the food";
  }

  voice() {
    return "Meow";
  }
}

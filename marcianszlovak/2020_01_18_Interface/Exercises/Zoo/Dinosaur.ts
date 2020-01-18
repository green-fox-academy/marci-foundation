import Animals from "./Animals";
export default class Dinosaur extends Animals {
  extinct: boolean;
  eyeColor: string;
  constructor(
    name: string = "Dinosaur",
    age: number = 123123123123,
    legs: number = 2,
    extinct: boolean = true,
    eyeColor: string = "blue"
  ) {
    super(name, age, legs);
    this.extinct = this.extinct;
    this.eyeColor = this.eyeColor;
  }
}

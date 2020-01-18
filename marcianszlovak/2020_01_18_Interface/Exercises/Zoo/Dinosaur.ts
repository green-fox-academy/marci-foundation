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
    this.extinct = extinct;
    this.eyeColor = eyeColor;
  }

  breed(): string {
    return "Like on the Discovery Channel";
  }

  eat(): string {
    return "other dinosaurs";
  }
}

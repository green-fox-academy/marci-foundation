"use strict";

import Animals from "./Animals";

export default class Cat extends Animals {
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
    return "like most mammals";
  }

  eat(): string {
    return "all the food";
  }

  voice() {
    return "Meow";
  }
}

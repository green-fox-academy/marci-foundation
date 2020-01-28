"use strict";

import Animals from "./Animals";

export default class KoalaBear extends Animals {
  nativeCountry: string;
  herbivorous: boolean;
  constructor(
    name: string = "Koala Bear",
    age: number = 7,
    legs: number = 4,
    nativeCountry: string = "Australia",
    herbivorous: boolean = true
  ) {
    super(name, age, legs);
    this.nativeCountry = nativeCountry;
    this.herbivorous = herbivorous;
  }

  breed(): string {
    return "9 times a year";
  }

  eat(): string {
    return "bamboo leaves";
  }
}

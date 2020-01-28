"use strict";

import Vehicle from "./Vehicle";

export default class Helicopter extends Vehicle implements Vehicle {
  canFly: boolean;
  constructor(
    gear: string = "automatic",
    wheels: number = 0,
    isElectric: boolean = false,
    canFly: boolean = true
  ) {
    super(gear, wheels, isElectric);
    this.canFly = canFly;
  }

  land(): string {
    return "never";
  }

  fly(): string {
    return "500 miles";
  }

  takeOff(): string {
    return "in two days";
  }
}

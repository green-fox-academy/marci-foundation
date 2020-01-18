"use strict";

export default abstract class Vehicle {
  gear: string;
  wheels: number;
  isElectric: boolean;

  constructor(gear: string, wheels: number, isElectric: boolean) {
    this.gear = gear;
    this.wheels = wheels;
    this.isElectric = isElectric;
  }
}

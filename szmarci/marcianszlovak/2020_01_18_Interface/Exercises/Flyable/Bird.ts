"use strict";

import Animals from "../Zoo/Animals";
import Flyable from "./Flyable";

export default class Bird extends Animals implements Flyable {
  notRobot: boolean;
  featherThickness: number;

  constructor(name: string, age: number, legs: number) {
    super(name, age, legs);
    this.notRobot = this.notRobot;
    this.featherThickness = this.featherThickness;
  }

  land(): string {
    return "when it stops flying";
  }

  breed(): string {
    return "eggs, dude";
  }

  eat(): string {
    return "insects";
  }

  fly(): string {
    return "when it wants to fly";
  }

  takeOff(): string {
    return "when it starts flying";
  }
}

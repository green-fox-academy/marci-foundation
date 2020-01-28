"use strict";

import Printable from "./Printable";

export default class Domino implements Printable {
  frontSide: number;
  backSide: number;

  constructor() {
    this.frontSide = Math.floor(Math.random() * 10);
    this.backSide = Math.floor(Math.random() * 10);
  }

  printAllFields(): string {
    return `Domino A side: ${this.frontSide}, B side: ${this.backSide}`;
  }
}

"use strict";

import Printable from "./Printable";

export default class Domino implements Printable {
  frontSide: string;
  backSide: string;

  constructor(
    frontSide: string = "Domino A side: 3",
    backSide: string = "B side: 2"
  ) {
    this.frontSide = frontSide;
    this.backSide = backSide;
  }
}

"use strict";

import Instrument from "./Instrument";

export default abstract class StringedInstrument extends Instrument {
  private numberOfStrings: number;

  constructor(name: string, numberOfStrings: number) {
    super(name);
    this.numberOfStrings = numberOfStrings;
  }

  abstract sound(): void;

  play(): void {
    console.log(
      `${this.instrumentName()}, a ${
        this.numberOfStrings
      }-stringed instrument that goes ${this.sound()}\n`
    );
  }
}

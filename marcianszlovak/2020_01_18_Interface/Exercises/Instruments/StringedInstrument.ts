import { Instrument } from "./Instrument";

export abstract class StringedInstrument extends Instrument {
  numberOfStrings: string;

  constructor(name: string, numberOfStrings: string) {
    super("");
    this.numberOfStrings = numberOfStrings;
  }

  sound() {}
}

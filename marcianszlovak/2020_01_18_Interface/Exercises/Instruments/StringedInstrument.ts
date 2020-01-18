import Instrument from "./Instrument";

export default abstract class StringedInstrument extends Instrument {
  numberOfStrings: string;

  constructor(name: string, numberOfStrings: string) {
    super("");
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

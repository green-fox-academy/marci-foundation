import StringedInstrument from "./StringedInstrument";

export default class Violin extends StringedInstrument {
  constructor(numberOfStrings: number = 4) {
    super("Violin", numberOfStrings);
  }

  sound() {
    return "Screech";
  }
}

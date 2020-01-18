import StringedInstrument from "./StringedInstrument";

export default class ElectricGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 6) {
    super("Electric Guitar", numberOfStrings);
  }

  sound() {
    return "Twang";
  }
}

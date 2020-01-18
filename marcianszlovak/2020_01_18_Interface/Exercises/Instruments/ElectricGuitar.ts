import StringedInstrument from "./StringedInstrument";

export default class ElectricGuitar extends StringedInstrument {
  constructor() {
    super("Electric Guitar", "6 strings");
  }

  sound() {
    return "Twang";
  }
}

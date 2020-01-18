import StringedInstrument from "./StringedInstrument";

export default class Violin extends StringedInstrument {
  constructor() {
    super("Violin", "4 strings");
  }

  sound() {
    return "Screech";
  }
}

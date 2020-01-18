import StringedInstrument from "./StringedInstrument";

export default class BassGuitar extends StringedInstrument {
  constructor() {
    super("BassGuitar", "4 strings");
  }

  sound() {
    return "Duum-duum-duum";
  }
}

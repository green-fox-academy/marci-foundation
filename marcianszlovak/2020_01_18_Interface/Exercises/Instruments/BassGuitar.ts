import { StringedInstrument } from "./StringedInstrument";

export default class BassGuitar extends StringedInstrument {
  constructor(name: string, numberOfStrings: string) {
    super("Violin", "4 strings");
  }
}

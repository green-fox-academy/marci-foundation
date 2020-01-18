import { StringedInstrument } from "./StringedInstrument";

export default class ElectricGuitar extends StringedInstrument {
  constructor(name: string, numberOfStrings: string) {
    super("Electric Guitar", "6 strings");
  }
}

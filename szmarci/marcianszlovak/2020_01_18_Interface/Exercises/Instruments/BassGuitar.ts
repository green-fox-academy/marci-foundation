"use strict";

import StringedInstrument from "./StringedInstrument";

export default class BassGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 4) {
    super("Bass Guitar", numberOfStrings);
  }

  sound() {
    return "Duum-duum-duum";
  }
}

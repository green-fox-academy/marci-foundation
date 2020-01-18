export abstract class Instrument {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  play() {}
}

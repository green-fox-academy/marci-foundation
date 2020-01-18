export default abstract class Instrument {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  abstract play(): void;

  instrumentName() {
    return this.name;
  }
}

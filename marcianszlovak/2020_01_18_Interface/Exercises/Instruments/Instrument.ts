"use strict";

export default abstract class Instrument {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract play(): void;

  instrumentName(): string {
    return this.name;
  }
}

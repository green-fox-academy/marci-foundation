"use strict";

import { randomGuesser } from "./randomGuesser";

export default class CowsAndBulls {
  public gameNumber: number;
  public gameState: string;
  public gameCounter: number;

  constructor(
    gameNumber: number = (Math.floor(Math.random() * 9) + 1) * 1000 +
      Math.floor(Math.random() * 10) * 100 +
      Math.floor(Math.random() * 10) +
      Math.floor(Math.random() * 10),
    gameState: string = "playing",
    gameCounter: number = 0
  ) {
    this.gameNumber = gameNumber;
    this.gameState = gameState;
    this.gameCounter = gameCounter;
  }

  getGameNumber(): number {
    return this.gameNumber;
  }

  getGameState(): string {
    return this.gameState;
  }

  getGameCounter(): number {
    return this.gameCounter;
  }

  target(inputNumber: number) {
    this.gameNumber = inputNumber;
  }

  takeGuess(inputNumber: number): string {
    if (this.gameState === "finished") {
      return "the end";
    } else {
      this.gameCounter++;

      let res: string = randomGuesser(inputNumber, this.gameNumber);

      if ((res = "4 cows")) {
        this.gameState = "finished";
      }
      return res;
    }
  }
}

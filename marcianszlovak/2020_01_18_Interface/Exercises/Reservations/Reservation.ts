"use strict";

import Reservationy from "./Reservationy";

const randomCharacters: string[] = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
  ""
);
const days: string[] = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export default class Reservation implements Reservationy {
  private code: string;
  private dow: string;

  constructor() {
    this.code = "";

    for (let index = 0; index < 8; index++) {
      this.code +=
        randomCharacters[Math.floor(Math.random() * randomCharacters.length)];
    }

    this.dow = days[Math.floor(Math.random() * days.length)];
  }

  getCodeBooking(): string {
    return `Booking# ${this.code} `;
  }

  getDowBooking(): string {
    return `for ${this.dow}`;
  }
}

let asd = new Reservation();

console.log(asd.getCodeBooking() + asd.getDowBooking());

"use strict";

import Reservationy from "./Reservationy";

const randomCharacters: string[] = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
  ""
);
const days: string[] = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
// const codeLength = 8;

export default class Reservation implements Reservationy {
  private code: string;
  private dow: string;

  constructor() {
    this.code = "";
    this.dow = days[Math.floor(Math.random() * days.length)];
    randomCharacters.forEach(randomCharacters => {
      this.code += [Math.floor(Math.random() * randomCharacters.length)];
    });
  }

  getCodeBooking(): string {
    return `Booking# ${this.code}  `;
  }

  getDowBooking(): string {
    return `for ${this.dow}`;
  }
}

let asd = new Reservation();

console.log(asd.getCodeBooking() + asd.getDowBooking);

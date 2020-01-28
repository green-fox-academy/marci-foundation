"use strict";

import Reservationy from "./Reservationy";
import StringedInstrument from "../Instruments/StringedInstrument";

export default class Reservation implements Reservationy {
  dow: string[] = [];
  code: string[] = [];

  constructor(
    dow: string[] = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
    code: string[] = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  ) {
    this.dow = dow;
    this.code = code;

    for (let index = this.dow.length - 1; index > 0; index--) {
      const randomDow = Math.floor(Math.random() * (index + 1));
      [this.dow[index], this.dow[randomDow]] = [
        this.dow[randomDow],
        this.dow[index]
      ];
    }

    for (let index = this.code.length - 1; index > 0; index--) {
      const randomCode = Math.floor(Math.random() * (index + 1));
      [this.code[index], this.code[randomCode]] = [
        this.code[randomCode],
        this.code[index]
      ];
    }
  }

  getDowBooking(): string {
    return ` for ${this.dow}`;
  }

  getCodeBooking(): string {
    return `Booking# ${this.code}`;
  }
}

let asd = new Reservation();
console.log(asd.getCodeBooking() + asd.getDowBooking());

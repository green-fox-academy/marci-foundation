"use strict";

import Reservationy from "./Reservationy";

export default class Reservation implements Reservationy {
  code: string;
  dow: string;

  constructor() {}

  getCodeBooking(): string {
    return;
  }

  getDowBooking(): string {
    return;
  }
}

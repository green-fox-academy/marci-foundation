import { Aircraft } from "./Aircraft";
import { F16 } from "./F16";
import { F35 } from "./F35";

export default class Carrier {
  aircrafts: Aircraft[];
  startingAmmo: number;
  healthPoints: number;

  constructor(startingAmmo: number, healthPoints: number) {
    this.aircrafts = [];
    this.startingAmmo = startingAmmo;
    this.healthPoints = healthPoints;
  }
}

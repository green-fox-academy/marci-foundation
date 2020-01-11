import { Aircraft } from "./Aircraft";

export default class Carrier {
  aircrafts: Aircraft[];
  startingAmmo: number;
  healthPoints: number;

  constructor(startingAmmo: number, healthPoints: number) {
    this.aircrafts = [];
    this.startingAmmo = startingAmmo;
    this.healthPoints = healthPoints;
  }
  add(newPlane: Aircraft): void {
    this.aircrafts.push(newPlane);
  }
  fill() {}

  fight(enemyCarrier: Carrier) {
    let tDamage: number = 0;
    this.aircrafts.forEach(newPlane => {
      tDamage += newPlane.fight();
    });
    enemyCarrier.healthPoints -= tDamage;
  }
}

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

  fill(isPriority: boolean) {
    this.aircrafts.forEach(currentItem => {
      if (currentItem.priority === isPriority) {
        if (this.startingAmmo < currentItem.maxAmmo - currentItem.currentAmmo) {
        } else {
          this.startingAmmo -= currentItem.maxAmmo - currentItem.currentAmmo;
          currentItem.currentAmmo = currentItem.maxAmmo;
        }
      }
    });
  }

  fight(enemyCarrier: Carrier): void {
    let tDamage: number = 0;
    this.aircrafts.forEach(newPlane => {
      tDamage += newPlane.fight();
    });
    enemyCarrier.healthPoints -= tDamage;
  }
}

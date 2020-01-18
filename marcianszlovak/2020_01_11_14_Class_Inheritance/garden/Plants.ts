export default class Plants {
  currentWaterLevel: number = 0;
  needWater: number;
  absorbAmount: number;
  color: string;

  constructor(currentWaterLevel: number, color: string) {
    (this.currentWaterLevel = currentWaterLevel), (this.color = color);
  }

  wateringPlants(a: number): void {
    //getWatered
    this.currentWaterLevel += a * this.absorbAmount;
  }

  plantNeedsWater(): boolean {
    return this.currentWaterLevel > this.needWater ? false : true;
  }

  /* toString(): string {
    return `The ${this.color} ${this.type} ${
      this.plantNeedsWater() ? "needs" : "doesn't need"
    } water`;
  } */
}

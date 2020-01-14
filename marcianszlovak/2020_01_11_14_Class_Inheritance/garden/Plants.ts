export class Plants {
  currentWaterLevel: number = 0;
  needWater: number;
  absorbAmount: number;
  color: string;

  constructor(
    currentWaterLevel: number,
    needWater: number,
    absorbAmount: number,
    color: string
  ) {
    (this.currentWaterLevel = currentWaterLevel),
      (this.needWater = needWater),
      (this.absorbAmount = absorbAmount),
      (this.color = color);
  }

  wateringPlants(a: number) {
    this.currentWaterLevel += a * this.absorbAmount;
  }

  plantNeedsWater(): boolean {
    return this.currentWaterLevel > this.needWater ? false : true;
  }
}

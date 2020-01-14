export class Plants {
  currentWaterLevel: number;
  needWater: number;
  absorbAmount: number;
  waterAdded: number;
  color: string;

  constructor(
    currentWaterLevel: number,
    needWater: number,
    absorbAmount: number,
    waterAdded: number,
    color: string
  ) {
    (this.currentWaterLevel = currentWaterLevel),
      (this.needWater = needWater),
      (this.absorbAmount = absorbAmount),
      (this.waterAdded = waterAdded),
      (this.color = color);
  }
  isWaterNeeded() {
    if (this.currentWaterLevel > this.needWater) {
      // needs more water
    } else {
      // doesn't need more water
    }
  }
}

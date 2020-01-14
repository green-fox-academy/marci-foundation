import Plants from "./Plants";

export default class Flowers extends Plants {
  constructor(currentWaterLevel: number, color: string) {
    super(currentWaterLevel, color);
    this.needWater = 5;
    this.absorbAmount = 0.75;
  }
}

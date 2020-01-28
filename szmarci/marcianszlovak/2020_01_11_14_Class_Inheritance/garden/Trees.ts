import Plants from "./Plants";

export default class Trees extends Plants {
  constructor(currentWaterLevel: number, color: string) {
    super(currentWaterLevel, color);
    this.needWater = 10;
    this.absorbAmount = 0.4;
  }
}

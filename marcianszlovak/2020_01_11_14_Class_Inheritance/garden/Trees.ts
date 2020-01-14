import { Plants } from "./Plants";

export class Trees extends Plants {
  constructor(currentWaterLevel: number, color: string) {
    super(currentWaterLevel, color);
    this.needWater = 10;
    this.absorbAmount = 0.4;
  }
}

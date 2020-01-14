import { Plants } from "./Plants";

export class Flowers extends Plants {
  constructor(
    currentWaterLevel: number,
    needWater: number,
    absorbAmount: number,
    waterAdded: number,
    color: string
  ) {
    super(0, 5, 0.75, waterAdded, "yellow");
  }
}

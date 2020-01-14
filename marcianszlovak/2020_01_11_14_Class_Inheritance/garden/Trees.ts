import { Plants } from "./Plants";

export class Trees extends Plants {
  constructor(
    currentWaterLevel: number,
    needWater: number,
    absorbAmount: number,
    waterAdded: number,
    color: string
  ) {
    super(0, 10, 0.4, waterAdded, "purple");
  }
}

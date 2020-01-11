import { Aircraft } from "./Aircraft";

export class F35 extends Aircraft {
  constructor(
    type: string = "F35",
    currentAmmo: number,
    maxAmmo: number = 12,
    baseDmg: number = 50,
    priority: boolean = true
  ) {
    super(type, currentAmmo, maxAmmo, baseDmg, priority);
  }
}

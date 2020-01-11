import { Aircraft } from "./Aircraft";

export class F16 extends Aircraft {
  constructor(
    type: string = "F16",
    maxAmmo: number = 8,
    currentAmmo: number,
    baseDmg: number = 30,
    priority: boolean = false
  ) {
    super(type, maxAmmo, currentAmmo, baseDmg, priority);
  }
}

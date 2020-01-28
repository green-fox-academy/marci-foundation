import { Aircraft } from "./Aircraft";

export class F16 extends Aircraft {
  constructor(
    type: string,
    maxAmmo: number,
    currentAmmo: number,
    baseDmg: number,
    priority: boolean
  ) {
    super("F16", 8, 0, 30, false);
  }
}

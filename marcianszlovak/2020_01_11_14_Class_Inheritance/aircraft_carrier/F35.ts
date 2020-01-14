import { Aircraft } from "./Aircraft";

export class F35 extends Aircraft {
  constructor(
    type: string,
    currentAmmo: number,
    maxAmmo: number,
    baseDmg: number,
    priority: boolean
  ) {
    super("F35", 0, 12, 50, true);
  }
}

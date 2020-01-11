import { Aircraft } from "./Aircraft";

export class F16 extends Aircraft {
  constructor(type: string = "F16", maxAmmo: number = 8, baseDmg: number = 30) {
    super(type, maxAmmo, baseDmg);
  }
}

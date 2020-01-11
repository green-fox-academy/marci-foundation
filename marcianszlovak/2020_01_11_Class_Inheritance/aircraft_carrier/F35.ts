import { Aircraft } from "./Aircraft";

export class F35 extends Aircraft {
  constructor(
    type: string = "F35",
    maxAmmo: number = 12,
    baseDmg: number = 50
  ) {
    super(type, maxAmmo, baseDmg);
  }
  isPriority(): boolean {
    return true;
  }
}

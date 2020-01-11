import { Aircraft } from "./Aircraft";

export class F16 extends Aircraft {
  constructor(
    ammo: number = 0,
    damage: number = 0,
    maxAmmo: number = 8,
    baseDamage: number = 30
  ) {
    super(ammo, damage, baseDamage, maxAmmo);
  }
}

export class Aircraft {
  ammo: number;
  damage: number;
  maxAmmo: number;
  baseDamage: number;
  constructor(
    ammo: number,
    damage: number,
    maxAmmo: number,
    baseDamage: number
  ) {
    this.ammo = ammo;
    this.damage = damage;
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
  }
  fight() {
    this.ammo = 0;
  }
  refill() {}
  getType() {}
  isPriority() {}
}

export class Aircraft {
  ammo: number;
  damage: number;
  maxAmmo: number;
  baseDamage: number;
  constructor(
    ammo: number = 0,
    damage: number = 0,
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
    this.baseDamage *= this.ammo;
  }
  refill(ammoAmount: number) {
    if (ammoAmount > this.maxAmmo) {
      return ammoAmount - this.maxAmmo;
    }
  }
}

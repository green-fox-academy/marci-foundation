export class Aircraft {
  type: string;
  currentAmmo: number;
  maxAmmo: number;
  baseDmg: number;
  priority: boolean;
  constructor(
    type: string,
    currentAmmo?: number,
    maxAmmo?: number,
    baseDmg?: number,
    priority?: boolean
  ) {
    this.type = type;
    this.currentAmmo = currentAmmo;
    this.maxAmmo = maxAmmo;
    this.baseDmg = baseDmg;
    this.priority = priority;
  }

  fight() {
    let doubleDamage = this.baseDmg * this.currentAmmo;
    this.currentAmmo = 0;
    return doubleDamage;
  }

  refill(refillAmmo: number) {
    const reloadedAmmo = Math.min(this.maxAmmo - this.currentAmmo, refillAmmo);
    this.currentAmmo += reloadedAmmo;
    return refillAmmo - reloadedAmmo;
  }

  getType() {
    return this.type;
  }

  getStatus() {
    const infoToString = `Type: ${this.type}, Ammo: ${
      this.currentAmmo
    }, Base Damage${this.baseDmg}, All Damage${this.currentAmmo *
      this.baseDmg}`;
    return infoToString;
  }

  isPriority() {
    return this.priority;
  }
}

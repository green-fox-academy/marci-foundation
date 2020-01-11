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
    let ammoToRefill: number = this.maxAmmo - this.currentAmmo;
    if (refillAmmo <= ammoToRefill) {
      this.currentAmmo += refillAmmo;
      return 0;
    } else {
      this.currentAmmo = this.maxAmmo;
      return refillAmmo - ammoToRefill;
    }
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

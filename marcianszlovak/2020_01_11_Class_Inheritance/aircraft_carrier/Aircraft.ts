export class Aircraft {
  type: string;
  currentAmmo: number;
  maxAmmo: number;
  baseDmg: number;
  constructor(
    type: string,
    currentAmmo?: number,
    maxAmmo?: number,
    baseDmg?: number
  ) {
    this.type = type;
    this.currentAmmo = currentAmmo;
    this.maxAmmo = maxAmmo;
    this.baseDmg = baseDmg;
  }
  fight() {
    this.currentAmmo = 0;
    return this.baseDmg * this.currentAmmo;
  }
  refill(refillAmmo: number) {
    if (refillAmmo < this.maxAmmo - this.currentAmmo) {
      this.currentAmmo += refillAmmo;
      return 0;
    } else {
      let shells = this.maxAmmo - this.currentAmmo;
      this.currentAmmo = this.maxAmmo;
      return refillAmmo - shells;
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
}

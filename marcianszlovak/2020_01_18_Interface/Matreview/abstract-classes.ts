interface Waterable {
  water(amount: number): void;
}

abstract class Plant implements Waterable {
  waterLevel: number;
  water(amount: number): void {
    this.waterLevel += amount;
  }

  abstract cure(): void; // ezt a cure methodust mindenképp implementálni kell, ezzel egy rendszert fel tudok építeni, mert mindenképp tartalmaznia kell ezt a metódust
} // tehát szabályokat fektetek le

class Tree extends Plant {
  cut(): void {
    //...
  }

  cure(): void {
    //...
  }
}

interface TreeOptions {
  type: string;
  color: string;
  age?: number;
}

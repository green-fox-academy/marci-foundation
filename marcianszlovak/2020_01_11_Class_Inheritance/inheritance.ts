class Engine {}
class Vehicle {
  //felvinni ide ami mind a kettőben közös
  engine: Engine;
  type: string;
  fuel: number;
  numberOfWheels: number;

  constructor(
    engine: Engine,
    type: string,
    fuel: number,
    numberOfWheels: number
  ) {
    this.engine = engine;
    this.type = type;
    this.fuel = fuel;
    this.numberOfWheels = numberOfWheels;
  }
  fill(amount: number): void {
    console.log("Vehicle fill");
    this.fuel += amount;
  }
}

class Car extends Vehicle {
  private static numberOfWheels = 4;

  constructor(engine: Engine, type: string, fuel: number) {
    super(engine, type, fuel, Car.numberOfWheels); // super() az alaposztály egész constructorra vonatkozik
  }

  fill(amount: number): void {
    super.fill(amount); // calling the fill method of the parent class
    console.log("Car fill");
  }
}

class Bus extends Vehicle {
  standingPlaces: number;
  constructor(
    engine: Engine,
    type: string,
    fuel: number,
    numberOfWheels: number,
    standingPlaces: number
  ) {
    super(engine, type, fuel, numberOfWheels);
    this.standingPlaces = standingPlaces;
  }
  stop(): void {}
}

const car1 = new Car(new Engine(), "BMW", 4);
const bus1 = new Bus(new Engine(), "Ikarusz", 2000, 8, 5);
car1.fill(100);

let garage: Vehicle[] = [];

console.log(car1 instanceof Vehicle);
console.log(car1 instanceof Bus);

garage.push(car1);
garage.push(bus1);

garage.forEach(currentItem => {
  currentItem.fill(1000);
  if (currentItem instanceof Bus) {
    const bus = currentItem as Bus;
    bus.stop(); // mivel megadtam, hogy bus, ezért elérhető lesz a stop method vagy (element as Bus).stop();
  }
  currentItem.stop(); // nem elérhetőek a speciális dolgok, tehát a bus-nak a stop method-ja
});

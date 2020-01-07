class Station {
  gasAmount: number;

  constructor(gasAmount: number = 1000) {
    this.gasAmount = gasAmount;
  }

  public refill(Car: any) {
    this.gasAmount -= Car.capacity;
    Car.gasAmount = Car.capacity;
  }
}

class Car {
  gasAmount: number;
  capacity: number;

  constructor(gasAmount: number = 0, capacity: number = 100) {
    this.gasAmount = gasAmount;
    this.capacity = capacity;
  }
}

const car = new Car();
const station = new Station();

station.refill(car);

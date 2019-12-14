class Human {
  name: string;
  age: number;
  static instances: Human[] = [];

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    Human.instances.push(this);
  }
}

const peti = new Human("Peti", 54);
const zsuzsi = new Human("Zsuzsi", 43);
console.log(peti);
console.log(peti.name);

const humen = [peti, zsuzsi];
console.log(humen);
console.log(peti instanceof Human);
console.log(Human.instances);

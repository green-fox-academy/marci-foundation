class Human {
    name: string;
    private firstName: string;
    private lastName: string;
    age: number;
  
    static instances: Human[] = [];
  
    constructor(name: string = "Anon", age: number = 8) {
      this.name = name;
      this.age = age;
      Human.instances.push(this);
    }
    getName(): string {
      return this.name;
    }
  }
  
  const peti = new Human("Peti", 54);
  const zsuzsi = new Human("Zsuzsi", 43);
  console.log(peti.getName());
  
  export { Human };
  
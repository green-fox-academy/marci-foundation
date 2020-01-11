import { Person } from "./Person";

export class Student extends Person {
  previousOrganization: string;
  skippedDays: number;
  constructor(
    name?: string,
    gender?: string,
    age?: number,
    previousOrganization: string = "The School of Life"
  ) {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }
  getGoal() {
    console.log("My goal is: to be a junior software developer");
  }
  introduce() {
    console.log(
      "Hi, I'm ${this.name} a ${this.age} year old ${this.gender} from ${this.previousOrganization who skipped ${this.skippedDays} days from the course already."
    );
  }
  skipDays(numberOfDays: number) {
    return (this.skippedDays += numberOfDays);
  }
}

import { Person } from "./person";

export class Student extends Person {
  previousOrganization: string;
  skippedDays: number;
  constructor(
    name: string,
    gender: string,
    age: number,
    previousOrganization: string,
    skippedDays: number
  ) {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = skippedDays;
  }
}

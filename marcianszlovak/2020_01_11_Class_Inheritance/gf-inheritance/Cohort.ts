import { Student } from "./Student";
import { Mentor } from "./Mentor";

export class Cohort {
  name: string;
  students: Student[];
  mentors: Mentor[];
  constructor(name: string) {
    this.name = name;
    this.students = []; // array so items can be pushed to it with the addStudent and the addMentor class methods
    this.mentors = [];
  }
  addStudent(student: Student) {
    this.students.push(student);
  }
  addMentor(mentor: Mentor) {
    this.mentors.push(mentor);
  }
  info() {
    console.log(
      `The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`
    );
  }
}

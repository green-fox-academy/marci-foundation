import { Student } from "./Student";
import { Mentor } from "./Mentor";

export class Cohort {
  name: string;
  students: Student[];
  mentors: Mentor[];
  constructor(name: string) {
    this.name = name;
    this.students = [];
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
      "The ${this.name} cohort ${this.students.length} students and ${this.mentors.length} mentors "
    );
  }
}

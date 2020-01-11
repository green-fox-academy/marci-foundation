import { Student } from "./Student";
import { Mentor } from "./Mentor";

export class Cohort {
  name: string;
  students: string[];
  mentors: string[];
  constructor(name: string, students: string[], mentors: string[]) {
    this.name = name;
    this.students = students;
    this.mentors = mentors;
  }
  addStudent(name: string) {
    this.students.push(name);
  }
  addMentor(name: string) {
    this.mentors.push(name);
  }
}

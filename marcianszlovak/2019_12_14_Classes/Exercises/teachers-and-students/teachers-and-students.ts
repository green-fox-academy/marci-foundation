class Student {
  public learn() {
    console.log("the student is learning something new");
  }

  public question(Teacher: any) {
    Teacher.answer();
  }
}

class Teacher {
  public teach(Student: any) {
    Student.learn();
  }

  public answer() {
    console.log("the teacher is answering a question");
  }
}

export { Student };
export { Teacher };

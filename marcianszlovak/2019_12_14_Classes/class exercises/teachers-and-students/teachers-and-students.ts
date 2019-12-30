class Student {
  public learn() {
    console.log("The student is learning something new.");
  }

  public question(Teacher) {
    Teacher.answer();
  }
}

class Teacher {
  public teach(Student) {
    Student.learn();
  }

  public answer() {
    console.log("The teacher is answering a question.");
  }
}

export { Student };
export { Teacher };

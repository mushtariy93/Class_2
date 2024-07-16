class Sinf {
  constructor(name, capacity) {
    this.name = name;
    this.capacity = capacity;
    this.students = [];
  }

  addStudent(student) {
    if (this.students.length < this.capacity) {
      this.students.push(student);
    } else {
      console.log(`Sinf ${this.name} to'lib qolgan.`);
    }
  }
}

class Student {
  constructor(name, age, className) {
    this.name = name;
    this.age = age;
    this.className = className;
  }
}

class School {
  constructor() {
    this.classrooms = [];
    this.students = [];
  }

  addClassroom(classroom) {
    this.classrooms.push(classroom);
  }

  addStudent(student) {
    const classroom = this.classrooms.find(
      (cls) => cls.name === student.className
    );
    if (classroom) {
      classroom.addStudent(student);
      this.students.push(student);
    } else {
      console.log(`Sinf ${student.className} topilmadi.`);
    }
  }
}


const sinfA = new Sinf("A", 3);
const sinfB = new Sinf("B", 2);

const student1 = new Student("Ali", 14, "A");
const student2 = new Student("Vali", 13, "A");
const student3 = new Student("Guli", 15, "A");
const student4 = new Student("Asal", 14, "A");
const student5 = new Student("Hasan", 13, "B");

const school = new School();
school.addClassroom(sinfA);
school.addClassroom(sinfB);

school.addStudent(student1);
school.addStudent(student2);
school.addStudent(student3);
school.addStudent(student4); 
school.addStudent(student5);

console.log(school);

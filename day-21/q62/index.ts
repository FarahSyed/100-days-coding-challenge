// Object Constructor
interface Student {
  id: number;
  name: string;
  age: number;
  classDetails: {
    grade: number;
    group: string;
    subjects: [string, string, string, ...(string | undefined)[]];
    isRegular: boolean;
  };
}

const student1: Student = {
  id: 1,
  name: "Vanessa",
  age: 18,
  classDetails: {
    grade: 10,
    group: "Computer Science",
    subjects: ["Computer Studies", "Mathematics", "Physics"],
    isRegular: true,
  },
}

console.log(student1);
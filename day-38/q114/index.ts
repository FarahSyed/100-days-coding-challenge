// Initialize an empty Map() object
const student = new Map<number, string>();

// Set 3 entries in Map
student.set(1, "Bert");
student.set(2, "Robert");
student.set(3, "Albert");

// For of Loop: gives value first then key
console.log(`Using For of Loop:`);
for (let [key, val] of student) {
    console.log(`id: ${key}, name: ${val}`);
}

// For Each Loop: gives key first then value
console.log(`\nUsing For Each Loop:`);
student.forEach((name, key) => {
    console.log(`id: ${key}, name: ${name}`);
});



// For storing multiple info
const studentInfo = new Map<number, {name: string,  course: string, subjects: string[]}>();
studentInfo.set(1, { name: "Bert", course: "Computer Science", subjects: ["Programming", "Data Structures"] });
studentInfo.set(2, { name: "Robert", course: "Mathematics", subjects: ["Calculus", "Linear Algebra"] });
studentInfo.set(3, { name: "Albert", course: "Physics", subjects: ["Mechanics", "Electromagnetism"] });

console.log(`\nUsing For Each Loop:`);
for (let [key, {name, course, subjects}] of studentInfo) {
    console.log(`id: ${key}, name: ${name}, course: ${course}, subjects: ${subjects.join(", ")}`);
}
// studentInfo.clear();  // To remove all entries
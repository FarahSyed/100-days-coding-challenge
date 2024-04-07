// Function determines the grade by taking obtained marks and total marks
function assignGrade(marksObtained, totalMarks) {
    // Calculate the percentage of obtained marks
    var percentage = Math.round((marksObtained / totalMarks) * 100);
    // Initialize a variable to store the grade
    var grade = '';
    // Determines the grade based on the percentage
    if (percentage <= 100 && percentage >= 90) {
        grade = 'A+';
    }
    else if (percentage >= 80) {
        grade = 'A';
    }
    else if (percentage >= 70) {
        grade = 'B';
    }
    else if (percentage >= 60) {
        grade = 'C';
    }
    else if (percentage >= 50) {
        grade = 'D';
    }
    else {
        grade = 'F';
    }
    return grade;
}
console.log(assignGrade(825, 1000)); // Grade A (83%)
console.log(assignGrade(300, 1000)); // Grade F (30%)

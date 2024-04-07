// Function that takes users age (number) then returns their age group (string)
function getAgeGroup(age: number): string {
    
    // Determines the age group based on the user's age
    let ageGroup = ``;
    if (age < 13) {
        ageGroup = 'Child';
    } else if (age < 20) {
        ageGroup = 'Teenager';
    } else if (age < 65) {
        ageGroup = 'Adult';
    } else {
        ageGroup = 'Elder';
    }
    return ageGroup;
}

console.log(getAgeGroup(5));    // Child
console.log(getAgeGroup(13));    // Teenager
console.log(getAgeGroup(35));    // Adult
console.log(getAgeGroup(70));    // Elder
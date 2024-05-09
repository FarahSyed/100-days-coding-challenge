// --------------------------- Enums ---------------------------

// Enum defining the days of the week with implicit numeric values.
enum Days {
    Sunday,    // Sunday is assigned 0, Monday is assigned 1
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}

// Declaring a variable `today` of type `Days` and assigning it the value `Thursday`
const today: Days = Days.Thursday;

// Logging the current day using the enum value `today`
console.log(`Today is ${Days[today]}`);
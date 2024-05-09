# Day-69 Task:

## Description
Learn about TypeScript enums by using the following guide and coding along with the examples provided in it:

[Enums in TypeScript](https://github.com/AsharibAli/100-days-of-code/blob/main/day-69/TS-Enums/README.md)


## Enums:
Enums in TypeScript allows to define a set of named constants. These constants can be numeric or string-based. Enums are useful for representing a fixed set of values, such as days of the week, months, or status codes.

### Example
```typescript
// Enum defining the days of the week with implicit numeric values.
enum Days {
    Sunday,    // Sunday is assigned 0, Monday is assigned 1, and so on.
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}

// Declaring a variable `today` of type `Days` and assigning it the value `Thursday`.
const today: Days = Days.Thursday;

// Logging the current day using the enum value `today`.
console.log(`Today is ${Days[today]}`);
```

In this example:
- We define an enum named `Days` that represents the days of the week. By default, enums in TypeScript have numeric values starting from 0 and incrementing by 1. For instance, `Sunday` is assigned the value 0, `Monday` is assigned 1, and so on.
- We declare a variable `today` of type `Days` and assign it the value `Thursday`.
- This provides type safety as `today` can only hold values defined in the `Days` enum.
- We log the current day using the enum value `today`. The expression `Days[today]` retrieves the string representation of the enum value, making it easier to work with.
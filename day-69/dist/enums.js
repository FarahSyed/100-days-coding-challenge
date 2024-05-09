"use strict";
// --------------------------- Enums ---------------------------
// Enum defining the days of the week with implicit numeric values.
var Days;
(function (Days) {
    Days[Days["Sunday"] = 0] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
})(Days || (Days = {}));
// Declaring a variable `today` of type `Days` and assigning it the value `Thursday`
const today = Days.Thursday;
// Logging the current day using the enum value `today`
console.log(`Today is ${Days[today]}`);

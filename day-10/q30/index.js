var userNames = ["Oliver", "James", "Alice", "Admin", "Claire"];
for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
    var i = userNames_1[_i];
    if (i === "Admin") {
        // Print specific message for admin
        console.log("Hello ".concat(i, ", would you like to see a status report?"));
    }
    else {
        // Print generic message for everyone
        console.log("Hello ".concat(i, ", thank you for logging in"));
    }
}
;

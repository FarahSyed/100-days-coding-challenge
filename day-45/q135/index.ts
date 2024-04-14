// An object
const user = {
    fullName: "Charlotte Kim",
    age: 22,
    hobbies: ["Swimming", "Coding", "Archery"],
};

// Converting the object to JSON string
const jsonString = JSON.stringify(user, null, 2);   // 2 adds indentation (2 spaces) for readability

console.log(jsonString);    // Log the indented JSON string to the console
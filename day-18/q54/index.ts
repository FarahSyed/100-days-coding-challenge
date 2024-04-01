// Function accepting two params, a key and a value
const dynamicObj = (key: string, value: unknown) => {
    const obj = {
        [key]: value,
    };
    return obj;
}

// Log objects with one key-value pair of arguments
console.log(dynamicObj("dailyStepsGoal", 14));
console.log(dynamicObj("emailNotification", true));
console.log(dynamicObj("dailyReminderTime", new Date(2024, 2, 31, 10, 30)));


// For multiple properties
// Function accepting indefinite properties
const dynamicProperties = (...params: [string, unknown][]) => {
    const obj = {};
    
    params.forEach(([key, val]) => {
        obj[key] = val;
    });
    
    return obj;
};

// Log one object with different arguments
console.log(dynamicProperties(["dailyStepsGoal", 14], ["emailNotification", true], ["dailyReminderTime", new Date(2024, 2, 31, 10, 30)]));
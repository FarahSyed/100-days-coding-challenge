// Function accepting two params, a key and a value
var dynamicObj = function (key, value) {
    var _a;
    var obj = (_a = {},
        _a[key] = value,
        _a);
    return obj;
};
// Log objects with one key-value pair of arguments
console.log(dynamicObj("dailyStepsGoal", 14));
console.log(dynamicObj("emailNotification", true));
console.log(dynamicObj("dailyReminderTime", new Date(2024, 2, 31, 10, 30)));
// For multiple properties
// Function accepting indefinite properties
var dynamicProperties = function () {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var obj = {};
    params.forEach(function (_a) {
        var key = _a[0], val = _a[1];
        obj[key] = val;
    });
    return obj;
};
// Log one object with different arguments
console.log(dynamicProperties(["dailyStepsGoal", 14], ["emailNotification", true], ["dailyReminderTime", new Date(2024, 2, 31, 10, 30)]));

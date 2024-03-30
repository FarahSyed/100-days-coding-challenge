var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var i = numbers_1[_i];
    // Change suffix of each number accordingly
    var suffix = "th";
    if (i === 1) {
        suffix = "st";
    }
    else if (i === 2) {
        suffix = "nd";
    }
    else if (i === 3) {
        suffix = "rd";
    }
    console.log("".concat(i).concat(suffix));
}
;

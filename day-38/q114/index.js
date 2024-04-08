var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var e_1, _a, e_2, _b;
// Initialize an empty Map() object
var student = new Map();
// Set 3 entries in Map
student.set(1, "Bert");
student.set(2, "Robert");
student.set(3, "Albert");
// For of Loop: gives value first then key
console.log("Using For of Loop:");
try {
    for (var student_1 = __values(student), student_1_1 = student_1.next(); !student_1_1.done; student_1_1 = student_1.next()) {
        var _c = __read(student_1_1.value, 2), key = _c[0], val = _c[1];
        console.log("id: ".concat(key, ", name: ").concat(val));
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (student_1_1 && !student_1_1.done && (_a = student_1.return)) _a.call(student_1);
    }
    finally { if (e_1) throw e_1.error; }
}
// For Each Loop: gives key first then value
console.log("\nUsing For Each Loop:");
student.forEach(function (name, key) {
    console.log("id: ".concat(key, ", name: ").concat(name));
});
// For storing multiple info
var studentInfo = new Map();
studentInfo.set(1, { name: "Bert", course: "Computer Science", subjects: ["Programming", "Data Structures"] });
studentInfo.set(2, { name: "Robert", course: "Mathematics", subjects: ["Calculus", "Linear Algebra"] });
studentInfo.set(3, { name: "Albert", course: "Physics", subjects: ["Mechanics", "Electromagnetism"] });
console.log("\nUsing For Each Loop:");
try {
    for (var studentInfo_1 = __values(studentInfo), studentInfo_1_1 = studentInfo_1.next(); !studentInfo_1_1.done; studentInfo_1_1 = studentInfo_1.next()) {
        var _d = __read(studentInfo_1_1.value, 2), key = _d[0], _e = _d[1], name = _e.name, course = _e.course, subjects = _e.subjects;
        console.log("id: ".concat(key, ", name: ").concat(name, ", course: ").concat(course, ", subjects: ").concat(subjects.join(", ")));
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (studentInfo_1_1 && !studentInfo_1_1.done && (_b = studentInfo_1.return)) _b.call(studentInfo_1);
    }
    finally { if (e_2) throw e_2.error; }
}
// studentInfo.clear();  // To remove all entries

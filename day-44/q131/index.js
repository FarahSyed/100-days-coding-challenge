"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Class - Blueprint for creating individual objects with properties
var Individual = /** @class */ (function () {
    // Constructor for handling dynamic values
    function Individual(name, profession, experience, skills) {
        this.name = name;
        this.profession = profession;
        this.experience = experience;
        this.skills = skills;
    }
    // Method to introduce the individual
    Individual.prototype.introduction = function () {
        return "Hi this is ".concat(this.name, ", and I am a ").concat(this.profession, " with ").concat(this.experience, " years of experience. My skillset include: ").concat(this.skills.join(", "));
    };
    return Individual;
}());
exports.default = Individual;

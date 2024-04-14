// Class - Blueprint for creating individual objects with properties
class Individual {
    name: string;
    profession: string;
    experience: number;
    skills: string[];

    // Constructor for handling dynamic values
    constructor(name: string, profession: string, experience: number, skills: string[]) {
        this.name = name;
        this.profession = profession;
        this.experience = experience;
        this.skills = skills;
    }

    // Method to introduce the individual
    introduction() {
        return `Hi this is ${this.name}, and I am a ${this.profession} with ${this.experience} years of experience. My skillset include: ${this.skills.join(", ")}`;
    }
}


export default Individual;